import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Post from '@/lib/models/post';
import '@/lib/models/user';

export const GET = async () => {
  try {
    await connect();
    const foundPosts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('user');

    return new NextResponse(
      JSON.stringify({
        message: 'Posts Retrived',
        data: foundPosts,
        status: true,
      })
    );
  } catch (error) {
    return new NextResponse('Error in fetching posts' + error, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const newPost = new Post(body);
    await newPost.save();

    return new NextResponse(
      JSON.stringify({
        message: 'Posts Created',
        data: newPost,
        status: true,
      })
    );
  } catch (error) {
    return new NextResponse('Error in creating post' + error, { status: 500 });
  }
};
