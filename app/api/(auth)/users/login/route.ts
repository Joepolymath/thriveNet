import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/lib/models/user';
import connect from '@/lib/db';

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const foundUser = await User.findOne({ username: body.username });
    if (!foundUser) {
      return new NextResponse(
        JSON.stringify({ message: 'User not found', status: false }),
        { status: 404 }
      );
    }

    const foundPassword = foundUser.password;
    const passwordValid = await bcrypt.compare(body.password, foundPassword);
    if (!passwordValid) {
      return new NextResponse(
        JSON.stringify({ message: 'Password Invalid', status: false }),
        { status: 400 }
      );
    }

    const accessToken = jwt.sign(
      { ...foundUser },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '30d',
      }
    );

    return new NextResponse(
      JSON.stringify({
        message: 'Login Successful',
        status: true,
        data: foundUser,
        accessToken,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse('Error in fetching users' + error, { status: 500 });
  }
};
