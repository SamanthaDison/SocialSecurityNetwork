import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
class PostsService {

  async getAll(query = {}) {

    const posts = await dbContext.Posts.find(query).populate('creator', 'name picture')

    return posts
  }

  async getById(id) {

    const post = await dbContext.Posts.findById(id).populate('creator', 'name picture')
    if (!post) {
      throw new BadRequest('invalid post id')
    }

    return post
  }

  async create(newPost) {
    const post = await dbContext.Posts.create(newPost)
    await post.populate('creator', 'name picture')
    return post
  }

  async edit(update) {
    const original = await this.getById(update.id)
    if (original.creator.id.toString() !== update.creator.id)
      throw new BadRequest('no edit for you')
    original.post = update.post || original.post
    await original.save()
    return original
  }
}

export const postsService = new PostsService