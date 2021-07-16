const mongoose = require('mongoose');

const new_keys = new mongoose.Schema({
   key:{
       type: String
   },
   email: {
       type: String,
       required: false
   }
});

const MessageModel = module.exports = mongoose.model('latest api', new_keys);