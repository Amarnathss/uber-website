import userModel from "../models/user_model.js";
import createUser from "../services/user_service.js";
import { validationResult } from 'express-validator'
import blockListTokenModel from "../models/blockListToken.model.js";

export const registerUser = async (req,res , next)=>{
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
    res.cookie('token', token);

    res.status(201).json({token,user});

}
export const loginUser = async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    const {email , password} = req.body;
    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({message : 'invalid email of password'}); 
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message : 'invalid email of password'}); 
    }

    const token = user.generateAuthToken();
    res.cookie('token', token);
    
    res.status(200).json({token , user});
}

export const getUserProfile = async (req,res)=>{
    res.status(200).json(req.user);
}

export const logoutUser = async (req , res)=>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blockListTokenModel.create({token});
    res.status(200).json({message: 'logged out'});
}
