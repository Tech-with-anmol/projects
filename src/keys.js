const mongoose = require('mongoose');

const keys = new mongoose.Schema({
   allowed: {
       type: Array
   },
   blacklisted: {
       type: Array
   },
   password: {
       type: String,
       unique: true
   }
});

const MessageModel = module.exports = mongoose.model('api keys', keys);