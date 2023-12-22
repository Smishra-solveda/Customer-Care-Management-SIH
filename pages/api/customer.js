import { mongooseConnect } from "@/lib/mongoose";
import { Customer } from "@/models/customer";

const handler = async (req, res) => {
    const { method } = req;
    await mongooseConnect();

    if (method === 'POST') {
        const { name, details, lastConversation, productDetails, lastOffers } = req.body;
        const customer = new Customer({ name, details, lastConversation, productDetails, lastOffers });
        await customer.save();
        res.status(201).json(customer);
    }

    if (method === 'GET') {
        if (req.query?._id) {
            const { _id } = req.query;
            const customerDoc = await Customer.findOne({ _id });
            res.status(200).json(customerDoc);
        }
        const customers = await Customer.find({});
        res.status(200).json(customers);
    }

    if (method === "DELETE") {
        const { _id } = req.query;
        const customerDoc = await Customer.deleteOne({ _id });
        res.status(200).json(customerDoc);
    }

    if (method === "PUT") {
        const { name, details, lastConversation, productDetails, lastOffers, _id } = req.body;
        const customerDoc = await Customer.updateOne({ _id }, { name, details, lastConversation, productDetails, lastOffers });
        res.status(200).json(customerDoc);
    }
}

export default handler;