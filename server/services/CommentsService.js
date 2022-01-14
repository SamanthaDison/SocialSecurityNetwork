import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
class CommentsService {

  async getAll(query = {}) {

    const comments = await dbContext.Comments.find(query).populate('creator', 'name picture')

    return comments
  }

  async getById(id) {

    const comment = await dbContext.Comments.findById(id).populate('creator', 'name picture')
    if (!comment) {
      throw new BadRequest('invalid comment id')
    }

    return comment
  }

  async create(newComment) {
    const comment = await dbContext.Comments.create(newComment)
    await comment.populate('creator', 'name picture')
    return comment
  }

  async edit(update) {
    const original = await this.getById(update.id)
    if (original.creator.id !== update.creatorId) {
      throw new BadRequest('no edit for you')
    }
    original.comment = update.comment || original.comment
    await original.save()
    return original
  }
  async remove(id, userId) {
    const original = await this.getById(id)
    if (original.creatorId.toString() !== userId) {
      throw new BadRequest('no remove for you!!!!')

    }
    await original.remove()
    // NOTE dont use below if you are already finding it
    // await dbContext.Comments.findOneAndRemove({ _id: id })
    return original
  }

}

export const commentsService = new CommentsService