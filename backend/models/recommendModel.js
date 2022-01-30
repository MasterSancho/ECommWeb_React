import mongoose from 'mongoose';

const recommendSchema = mongoose.Schema(
 {
  user: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'User',
  },
  name: {
   type: String,
   required: true,
  },
  image: {
   type: String,
   required: true,
  },
  description: {
   type: String,
   required: true,
  },
  category: {
   type: String,
   required: true,
  },
 },
 {
  timestamps: true,
 }
);

const Recommend = mongoose.model('Recommend', recommendSchema);

export default Recommend;
