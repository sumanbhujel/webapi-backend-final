const mongoose = require('mongoose');
const USER = require('./User');
const SCHEMA = mongoose.Schema;

const SCRAPSCHEMA = new SCHEMA({

    image: {
        type: String,
        required: true,
        trim: true
    },
    scrapType: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: SCHEMA.Types.ObjectId,
        ref: USER
    }
});

const SCRAP = mongoose.model('scrap', SCRAPSCHEMA)

module.exports = SCRAP;