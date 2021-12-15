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
    type: [String]
  }
});

// UserSchema.pre(
//     'save',
//     async function(next) {
//       const user = this;
//       const hash = await bcrypt.hash(this.password, 10);
//       this.password = hash;
//       next();
//     }
//   );
  
UserSchema.methods.isValidPassword = async (password,hash)=> {
  // const user = this;
  // console.log(this);
  const compare = await bcrypt.compare(password, hash);
  return compare;
}

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;