import mongoose, { Schema } from 'mongoose'

const FeedbackSchema = new Schema(
  {
    text: String,
    author: String,
  },
  {
    timestamps: true,
  }
)
const Feedback = mongoose.model('Feedback', FeedbackSchema)

export default Feedback
