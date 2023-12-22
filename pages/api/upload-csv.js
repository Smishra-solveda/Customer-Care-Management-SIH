// pages/api/upload-csv.js

import formidable from 'formidable';
import fs from 'fs';
import { Customer } from '@/models/customer'; // Import your Customer model
import { mongooseConnect } from '@/lib/mongoose';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    await mongooseConnect(); // Connect to MongoDB using the existing mongooseConnect function

    const form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing the form data' });
      }

      const filePath = files.file.path;

      // Use papaparse to parse the CSV file
      const parseResult = parseCSVFile(filePath);

      // Transform the parsed data into an array of Customer objects
      const customerData = parseResult.data.map((entry) => ({
        name: entry.name,
        details: entry.details,
        lastConversation: entry.lastConversation,
        productDetails: entry.productDetails,
        lastOffers: entry.lastOffers,
      }));

      // Insert the transformed data into MongoDB
      await insertDataIntoMongoDB(customerData);

      res.status(200).json({ success: true });
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    console.log('Disconnected from MongoDB');
  }
}

// Function to parse the CSV file using papaparse
function parseCSVFile(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf-8');
  return Papa.parse(fileData, { header: true });
}

// Function to insert data into MongoDB
async function insertDataIntoMongoDB(data) {
  try {
    // Insert data into the MongoDB collection using the Customer model
    await Customer.insertMany(data);
    console.log('Data inserted into MongoDB');
  } catch (error) {
    console.error('Error inserting data into MongoDB:', error);
    throw error;
  }
}
