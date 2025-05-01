import userModel from "../models/user_model.js";
import createUser from "../services/user_service.js";
import { validationResult } from 'express-validator'

const registerUser = async (req,res , next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    const {fullname: { firstname, lastname }, email , password} = req.body;

    const hashPassword = await userModel.hashPassword(password);


    const user = await createUser({
        fullname: {
            firstname,
            lastname
          },
        email,
        password: hashPassword
    });
    const token = user.generateAuthToken();
    res.status(201).json({token,user});

}

export default registerUser;
