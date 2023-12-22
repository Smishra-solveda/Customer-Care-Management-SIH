import { mongooseConnect } from "@/lib/mongoose";
import { Blog } from "@/models/blogs";

const handler = async (req, res) => {
    const { method } = req;
    await mongooseConnect();

    if (method === 'POST') {
        const { title, content } = req.body;
        const blog = new Blog({ title, content });
        await blog.save();
        res.status(201).json(blog);
    }

    if (method === 'GET') {
        const blogs = await Blog.find({});
        res.status(200).json(blogs);
    }

    if (method === 'DELETE') {
        const { _id } = req.query;
        const blogDoc = await Blog.deleteOne({ _id });
        res.status(200).json(blogDoc);
    }
}

export default handler;
