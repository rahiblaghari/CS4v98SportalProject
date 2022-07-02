import express from 'express';
import mongoose from 'mongoose';
import loginMessage from '../models/loginMessage.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();
let input = {
    "name":"Rahib",
    "email":"rlaghari@gmail.com",
    "country":"USA",
    "state":"Texas",
    "city":"Dallas",
    "sports":["Soccer", "Basketball"], 
    "goals":["18 mph run", "2 ft vertical", "Run 5 miles"], 
    "teams": ["Everton", "Grizzlies", "Shooters"], 
    "events": [
      {"dates": "September 1st, 2022", "eventNames": "Kayak"}, 
      {"dates": "September 1st, 2022", "eventNames": "Kayak"},
      {"dates": "September 2nd, 2022", "eventNames": "Soccer"}
    ]
  }

export const getlogin = async (req, res) => { 
  res.send(input)
}

export const postlogin = asyncHandler(async (req, res) => { 
  let message = await loginMessage.findOne({'username':req.body.username})
  console.log(message)
  res.send(message)
})