import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  roles: [{ type: String, required: true }]
});

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
