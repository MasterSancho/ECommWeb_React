import mongoose from 'mongoose';

const digitalCardSchema = mongoose.Schema(
 {
  user: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'User',
  },
  showcase: {
   type: String,
   required: true,
  },
  profile_image: {
   type: String,
   required: true,
  },
  name: {
   type: String,
   required: true,
  },
  slogan: {
   type: String,
   required: true,
  },
  about: {
   type: String,
   required: true,
  },
 },
 {
  timestamps: true,
 }
);

const DigitalCard = mongoose.model('DigitalCard', digitalCardSchema);

export default DigitalCard;
