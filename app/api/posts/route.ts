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

// like and dislike
export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();

    let newLikedBys: any[];
    let likes: number;
    let action: string;

    const foundPost: any = await Post.findById(body._id).lean();
    if (!foundPost) {
      return new NextResponse('Post not found', { status: 404 });
    }
    console.log({ foundPost });
    console.log({ likedBy: body.likedBy });
    if (foundPost.likedBys.includes(body.likedBy)) {
      console.log('DISLIKING');
      // dislike
      newLikedBys = foundPost.likedBys.filter(
        (userId: any) => userId !== body.likedBy
      );

      console.log({ newLikedBys });

      // decrement likes
      likes = foundPost.likes - 1;
      action = 'disliked';
    } else {
      console.log('LIKING');
      // like
      newLikedBys = [...foundPost.likedBys, body.likedBy];
      console.log({ newLikedBys });
      // increment likes
      likes = foundPost.likes + 1;
      action = 'liked';
    }
    console.log('NEWLIKEDBYS BEFOR UPDATE', newLikedBys);
    const updatedPost = await Post.findByIdAndUpdate(body._id, {
      likes,
      likedBys: newLikedBys,
    });

    console.log({ updatedPost });

    return new NextResponse(
      JSON.stringify({
        message: 'Posts Created',
        data: updatedPost,
        action,
        status: true,
      })
    );
  } catch (error) {
    return new NextResponse('Error in liking post ' + error, { status: 500 });
  }
};
