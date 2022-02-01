import mongoose from 'mongoose';

const digitalCardSchema = mongoose.Schema(
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
  showcase: {
   type: String,
   required: true,
  },
  profile_card: {
   image: {
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
  },

  icons_links: {
   waze: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   mailto: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   whatsapp: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   tel: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   govmap: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   remax_israel: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   madlan: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   facebook: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   flipbuilder: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   info: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   theselected: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   tivuch1: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
  },

  share_links: {
   mailto: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   sms: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   whatsapp: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
   facebook: {
    url: {
     type: String,
     required: true,
    },
    name: {
     type: String,
     required: true,
    },
   },
  },

  picture_carousel: {
   image: {
    type: String,
    required: true,
   },
   name: {
    type: String,
    required: true,
   },
  },

  about: {
   text_1: {
    text: {
     type: String,
     required: false,
    },
   },
   text_2: {
    text: {
     type: String,
     required: false,
    },
   },
   text_3: {
    text: {
     type: String,
     required: false,
    },
   },
   text_4: {
    text: {
     type: String,
     required: false,
    },
   },
   text_5: {
    text: {
     type: String,
     required: false,
    },
   },
  },

  recommend_carousel: {
   image: {
    type: String,
    required: true,
   },
   name: {
    type: String,
    required: true,
   },
  },
 },
 {
  timestamps: true,
 }
);

const DigitalCard = mongoose.model('DigitalCard', digitalCardSchema);

export default DigitalCard;
