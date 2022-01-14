import { Auth0Provider } from "@bcwdev/auth0provider"
import { postsService } from "../services/PostsService"
import BaseController from "../utils/BaseController"


export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/id:, this.getById')
    // .post('', this.create)
    // .put('/:id',this.edit )
    // .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      const posts = await postsService.getAll(req.query)
      return res.send(posts)
    } catch (err) {
      next(err)
    }
  }

  async getById(req)

}