import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
export const PostSchema = new Schema({
  Title: { type: String, required: true },

  Body: { type: String, required: true },

  creatorId: { type: ObjectId, ref: 'Profile', required: true },

  imgUrl: { type: String, required: true || 'http://placehold.it300x300' }

},
  { timestamp: true, toJSON: { virtuals: true } }

)
PostSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
