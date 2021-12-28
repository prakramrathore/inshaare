const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filename: {type: String, required: true},
    path: {type: String, requires: true},
    size: {type: Number, requires: true},
    uuid: {type: String, requires: true},
    sender: {type: String, required: false},
    receiver: {type: String, required: false}
}, {timestamps: true});

module.exports = mongoose.model('File', fileSchema);
