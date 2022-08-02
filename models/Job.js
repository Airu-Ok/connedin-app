import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Por favor, escribe una compañia'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'Por favor, escribe una posición'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['entrevista', 'rechazado', 'pendiente'],
      default: 'pendiente',
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remoto', 'pasantia'],
      default: 'full-time',
    },
    jobLocation: {
      type: String,
      default: 'mi ciudad',
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Por favor, escribe un nombre de usuario'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Job', JobSchema)
