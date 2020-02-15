const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const SCHEMA = mongoose.Schema;

const USERSCHEMA = new SCHEMA({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    userType: {
        type: String,
        default: "normal"
    },
    displayPicture: {
        type: String,
        default: "default.png"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

USERSCHEMA.statics.checkCrediantialsDb = async (user11, pass11) => {
    const user1 = USER.findOne({ email: user11, password: pass11 });
    return user1;
}

USERSCHEMA.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'mynewtoken');
    // console.log(token);
    user.tokens = user.tokens.concat({ token: token });
    await user.save();
    return token;
}

const USER = mongoose.model('user', USERSCHEMA);
module.exports = USER;