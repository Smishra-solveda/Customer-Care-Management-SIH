import { mongooseConnect } from "@/lib/mongoose";
import { Feedback } from "@/models/feedback";


const handler = async (req, res) => {
    const { method } = req;
    await mongooseConnect();

    if (method === 'POST') {
        const { feedbackData, rating, toolsWorking, contactDeveloper } = req.body;
        const feedbackDoc = new Feedback({ feedbackData, rating, toolsWorking, contactDeveloper });
        await feedbackDoc.save();
        res.status(201).json(feedbackDoc);
    }

    if (method === 'GET') {
        const feedbackDocs = await Feedback.find({});
        res.status(200).json(feedbackDocs);
    }
}

export default handler;