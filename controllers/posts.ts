import Post from "../models/post";
import handleSuccess from "../service/handleSuccess";
import handleError from "../service/handleError";
import { IPost } from "../type";
import {Request, Response} from 'express';

const posts = {
  async getPosts(req: Request, res: Response){
    const posts = await Post.find();
    handleSuccess(res, posts);
  },
  async createPost(req: Request, res: Response){
    try {
      const { body } = req;

      if(!!body.content){
        const newPost = await Post.create<IPost>({
          name: body.name,
          content: body.content
        });
        handleSuccess(res, newPost)
      }else{
        const error = new Error("");
        handleError(res, error);
      }

    } catch (error: unknown) {
      if (error instanceof Error) {
        handleError(res, error);
      }
    }
  },
  async deletePost(req: Request, res: Response){
    const id = req.url?.split('/').pop()!;
    await Post.findByIdAndDelete(id);
    handleSuccess(res, null);
  },
  async deleteAllPosts(req: Request, res: Response){
    await Post.deleteMany({});
    handleSuccess(res, null);
  },
  async updatePost(req: Request, res: Response){
    const id = req.url?.split('/').pop()!;
    const { body } = req;
    const posts = await Post.findByIdAndUpdate(id, body, { new: true });
    handleSuccess(res, posts);
  }
}

export default posts;