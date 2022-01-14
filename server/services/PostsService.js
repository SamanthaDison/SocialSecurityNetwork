import { dbContext } from "../db/DbContext"

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
}

export const postsService = new PostsService