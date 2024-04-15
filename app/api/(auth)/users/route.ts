import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connect from '@/lib/db';
import User from '@/lib/models/user';

export const GET = async () => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse('Error in fetching users' + error, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const foundUser = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (foundUser) {
      return new NextResponse(
        JSON.stringify({ message: 'User Already exists', status: false }),
        { status: 400 }
      );
    }
    const hashSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, hashSalt);
    body.password = hashedPassword;
    const newUser = new User(body);
    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: 'User Created', status: true, data: newUser }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse('Error in fetching users' + error, { status: 500 });
  }
};
