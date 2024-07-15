const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    role:{
        type: String,
        require:true,
       }
},{
    timestamps:true
})
module.exports = mongoose.model('role',roleSchema)