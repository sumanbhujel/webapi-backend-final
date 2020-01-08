import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const SCHEMA = mongoose.Schema;

const USERSCHEMA = new SCHEMA({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true
    },
    familyName: {
        type: String,
        required: [true, 'Family name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email-address is required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true
    },
    userType: {
        type: String,
        required: [true, "Usertype is required"],
        trim: true
    },
    displayPicture: {
        type: String,
        default: "dp_placeholder.png"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }]
});

USERSCHEMA.statics.checkCrediantialsDb = async (user11, pass11) => {
    const user1 = User.findOne({ email: user11, password: pass11 });
    return user1;
}

USERSCHEMA.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'mynewtoken');
    console.log(token);
    user.tokens = user.tokens.concat({ token: token });
    await user.save();
    return token;
}

const USER = mongoose.model('user', USERSCHEMA);
export default USER;