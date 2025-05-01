import express from 'express'
const router = express.Router();
import {body} from 'express-validator'
import registerUser from '../controllers/user_controllers.js'

router.post('/register' ,[
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('first name must be at least 3 char long'),
    body('password').isLength({mid: 6}).withMessage("password must at least 5 char length.")
],registerUser)





export default router;
