export const isValidEmail=(email:string)=>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export const isValidPassword=(password:string)=>{
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
}