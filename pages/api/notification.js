import { mongooseConnect } from "@/lib/mongoose";
import { Notification } from "@/models/notification";

const handler = async (req, res) => {
    const { method } = req;
    await mongooseConnect();

    if (method === 'POST') {
        const { info } = req.body;
        const notification = new Notification({ info });
        await notification.save();
        res.status(201).json(notification);
    }

    if (method === 'GET') {
        const notifications = await Notification.find({});
        res.status(200).json(notifications);
    }

    if (method === "DELETE") {
        const { _id } = req.query;
        const notificationDoc = await Notification.deleteOne({ _id });
        res.status(200).json(notificationDoc);
    }
}

export default handler;