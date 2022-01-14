import { dbContext } from "../db/DbContext"

class PostsService {

  async getAll(query = {}) {

    const posts = await dbContext.Posts.find(query).populate('creator', 'name picture')

    return posts
  }
}

export const postsService = new PostsService