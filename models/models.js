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
  timestamp: {
    type: Date,
    default: Date.now, // ✅ ده بيضيف التاريخ أوتوماتيك عند الإنشاء
   },
});

export default mongoose.model('Conversion', conversionSchema);