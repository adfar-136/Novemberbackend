// Define the User Schema
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema(
  {
    
    username:{
      type:String,
      required:true,
      unique:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true,
      validate(value){
        if(value.lenght <8){
          throw new Error("Password should be at least 8 characters long")
        }
      }
    }
  },
  { timestamps: true } // Automatically generate 'createdAt' and 'updatedAt' timestamps
);

// Pre-save hook to hash the user's password before saving it to the database
userSchema.pre('save', async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model('User', userSchema);
