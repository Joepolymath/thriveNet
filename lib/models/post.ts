import mongoose, { model, models } from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    text: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    community: {
      type: mongoose.Types.ObjectId,
      ref: 'Community',
    },
    image: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Post = models.Post || model('Post', postSchema);

export default Post;
