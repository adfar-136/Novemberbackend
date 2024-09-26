var mongoose= require("mongoose");

var userSchema= mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    Email:{
        type: String,
        required:true
    },
    pswd:{
        type: String,
        required:true
    },
    role:{
        type: String,
        enum: ['buyer', 'Seller']
    }
    
});

module.exports =mongoose.model("users",userSchema);