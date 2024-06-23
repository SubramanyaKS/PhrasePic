import connectDB from "@/lib/connect";
import User from "@/modules/user";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import  CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

const authOptions:NextAuthOptions ={
    providers:[
        CredentialsProvider({
            id:'credentials',
            name:'Credentials',
            credentials:{
                email:{label:"email",type:"email"},
                password:{label:"password",type:"password"},


            },
            async authorize(credentials:any){
                await connectDB();
                const {email,password} = credentials;
                try {
                    const user=await User.findOne({email:email});
                    if(user){
                        const isValid=await bcrypt.compare(password,user.password);
                        if(isValid){
                            return user;
                        }
                        else{
                            return null;
                        }
                    }
                    
                } catch (error) {
                    throw new Error("Something went wrong while login");
                    
                }
            },

        }),
    ],
    session:{
        strategy:"jwt",
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:'/login',
    },
};
const handler = NextAuth(authOptions);
export {handler as POST,handler as GET};
