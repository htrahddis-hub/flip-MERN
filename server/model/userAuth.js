const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  validApi: {
    type: String
  }
});
  
UserSchema.methods.isValidPassword = async (password,hash)=> {
  // const user = this;
  // console.log(this);
  const compare = await bcrypt.compare(password, hash);
  return compare;
}

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;