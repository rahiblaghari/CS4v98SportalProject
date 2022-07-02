import mongoose from 'mongoose';

const signInSchema = mongoose.Schema({
    username:{type:String, required: [true, 'Please enter username'], unique: true},
    password:{type:String, required: [true, 'Please enter Password']}
}, {collection:"signins"})

var signInMessage = mongoose.model('signInMessage', signInSchema);

export default signInMessage;