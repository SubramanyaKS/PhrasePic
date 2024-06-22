import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/connect';
import User from '@/modules/user';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!email ||!name|| !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    await connectDB();
    const hashpassword = await bcrypt.hash(password,10);
    await User.create({name,email,password:hashpassword});


    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
