import mongoose, { model, models } from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  profileImage: {
    type: String,
  },
});

const User = models.User || model('User', userSchema);

export default User;
