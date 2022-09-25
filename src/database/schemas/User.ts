import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';


// criando schema do usuario
const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
});

User.pre('save', async function (next) {
  const hashedPassword = await bcryptjs.hash(this.password, 12);
  this.password = hashedPassword;
  next();
});

export default mongoose.model("User", User);