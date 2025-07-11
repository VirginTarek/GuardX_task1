import mongoose from 'mongoose';

const conversionSchema = new mongoose.Schema({
  roman: {
    type: String,
    required: true,
    trim: true,
  },
  integer: {
    type: Number,
    required: true,
    min: 0,
  },
});

export default mongoose.model('Conversion', conversionSchema);
