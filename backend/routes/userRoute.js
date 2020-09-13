import express from 'express';
import userModel from '../models/userModel'
import { getToken } from "../util";

const router = express.Router();

router.post('/signin', async (req, res) => {
    const signinUser = await userModel.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if (signinUser) {

        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })

    }
    else {
        res.status(404).send({msg: "Invalid ID or Password."})
    }


})
export default router;