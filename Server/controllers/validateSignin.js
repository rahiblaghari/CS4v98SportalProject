import express from 'express';
import mongoose from 'mongoose';
import signInMessage from '../models/signInMessage.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

export const postSignin = asyncHandler(async (req, res) => { 
    if(await signInMessage.find({'username': req.body.username, 'password': req.body.password}).count().exec()){
        res.send(true)
    }
    else{res.send(false)}
})