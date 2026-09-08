import { useState } from "react";
import { forgotPassword } from "../actions/auth";

export const useForgot: any=()=>{
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent,setSent]=useState(false);
      
    const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);

    const result = await forgotPassword(formData);

    if (result.error) {
      setMessage(result.error);
      return;
    }

    setMessage(result.success ?? "");
    setSent(true);
    };
    return {email,handleSubmit,message,setEmail,sent};
}