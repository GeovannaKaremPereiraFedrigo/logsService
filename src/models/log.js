import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  message: { type: String, required: true },
  level: { type: String, enum: ['info', 'warn', 'error'], default: 'info' },
  timestamp: { type: Date, default: Date.now },
  systemId: { type: mongoose.Schema.Types.ObjectId, ref: 'System' },
  service: { type: String, enum: ['aplicacao', 'auth', 'emails'], required: true },
  email: { type: String, required: false }
});

export default mongoose.model('Log', logSchema);