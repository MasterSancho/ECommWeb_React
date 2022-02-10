import mongoose from 'mongoose';

const gallerySchema = mongoose.Schema(
 {
  user: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'User',
  },
  galleryImages: [
   {
    name: {
     type: String,
     required: true,
    },
    image: {
     type: String,
     required: true,
    },
   },
  ],
 },
 {
  timestamps: true,
 }
);

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;
