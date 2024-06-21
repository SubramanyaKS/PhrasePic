import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import connectDB from '@/lib/connect';
import User from '@/modules/user';

export async function POST(req: NextRequest) {
  const { token, newPassword } = await req.json();

  if (!token || !newPassword) {
    return NextResponse.json({ message: 'Token and new password are required' }, { status: 400 });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
   
    await connectDB();

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await User.updateOne(
      { _id: new ObjectId(decoded.userId) },
      { $set: { password: hashedPassword } }
    );

    return NextResponse.json({ message: 'Password has been reset' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
  }
}
