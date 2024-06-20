import connectDB from "@/lib/connect";
import User from "@/modules/user";
import { NextRequest,NextResponse } from "next/server";

export async function POST(req:NextRequest){

    try {
        const {email} =await req.json();
        await connectDB();
        const user = await User.findOne({email}).select('_id');
        return NextResponse.json({user},{status:200});
        
        
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{status:500})
        
    }
}