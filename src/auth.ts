import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import connectDB from "@/lib/connect";
import User from "@/modules/user";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await connectDB();
        const { email, password } = credentials;

        try {
          const user = await User.findOne({ email: email.toLowerCase() });
          if (!user) {
            return null;
          }

          const isValid = await bcrypt.compare(password, user.password);
          if (isValid) {
            return {
              id: user._id.toString(),
              email: user.email,
              name: user.name,
            };
          }

          return null;
        } catch (error) {
          throw new Error('Something went wrong while login');
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};
