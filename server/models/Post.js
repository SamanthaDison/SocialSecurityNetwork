import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
export const PostSchema = new Schema({
  Title: { type: String, required: true },

  Body: { type: String, required: true },

  creatorId: { type: Schema.Types.ObjectId, ref: 'profile', required: true },

  // imgUrl: { type: String, required: true }

},
  { timestamp: true, toJSON: { virtuals: true } }

)
PostsSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'profile'
})
