import userModel from "../models/user_model.js";


const createUser = async ({
    fullname , email,password
})=> {
    const { firstname, lastname } = fullname || {};
    if(!firstname || !email || !password){
        throw new Error("all fields are required");
    }
    const user = await userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}

export default createUser;