import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async()=>{
    try {
        const db=await mongoose.connect(process.env.MONGODB_URI!,{
            useNewUrlParser: true,
        }as ConnectOptions);  
        return db; 
    } catch (error) {
        console.log("DB Error",error);
    }
}
export default connectDB;