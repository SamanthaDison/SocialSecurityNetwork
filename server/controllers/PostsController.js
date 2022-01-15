import { Auth0Provider } from "@bcwdev/auth0provider"
import { commentsService } from "../services/CommentsService"
import { postsService } from "../services/PostsService"
import BaseController from "../utils/BaseController"


export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/comments', this.getCommentsByPostId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      const posts = await postsService.getAll(req.query)
      return res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async getCommentsByPostId(req, res, next) {
    try {
      const comments = await commentsService.getCommentsByPostId(req.params.id)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {

    try {
      const post = await postsService.getById(req.params.id)
      return res.send(post)

    } catch (error) {
      next(error)

    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const post = await postsService.create(req.body)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const updated = await postsService.edit(req.body)
      return res.send(updated)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await postsService.remove(req.params.id, req.userInfo.id)
      return res.send('deleted')

    } catch (error) {
      next(error)
    }
  }

}