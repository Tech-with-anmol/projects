const mongoose = require('mongoose');

const new_keys = new mongoose.Schema({
   key:{
       type: String
   },
   email: {
       type: String,
       required: false
   },
   type:{
       required: true,
       type: String
   }
});

const MessageModel = module.exports = mongoose.model('premium api', new_keys);