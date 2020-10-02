module.exports = ({ Schema }) => new Schema({
  authorId: {
    ref: 'User',
    type: Schema.Types.ObjectId,
  },
  postId: {
    ref: 'Post',
    type: Schema.Types.ObjectId,
  },
  text: String,
  isDeleted: {
    default: false,
    type: Boolean,
  },
  created: Number,
  updated: Number,
  entity: {
    default: 'Comment',
    type: String,
  },
});
