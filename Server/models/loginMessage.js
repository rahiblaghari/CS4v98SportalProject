import mongoose from 'mongoose';

const eventsSchema = mongoose.Schema({
    dates: String,
    eventNames: String
})

const loginSchema = mongoose.Schema({
    name:{type:String, required: [true, 'Please enter your name']},
    email:{type:String, required: [true, 'Please enter Email'], unique: true},
    country:{type:String, required: [true, 'Please enter Country']},
    state:{type:String, required: [true, 'Please enter State']},
    city:{type:String, required: [true, 'Please enter City']},
    sports:[String],
    goals:[String],
    teams:[String],
    events:[eventsSchema],
    username:{type:String, required: [true, 'Please enter username'], unique: true},
},{collection:"userData"})

var loginMessage = mongoose.model('loginMessage', loginSchema);

export default loginMessage;