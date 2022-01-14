import { AuthController } from './Controllers/AuthController.js'
import { ValuesController } from './Controllers/ValuesController.js'
import { PostsController } from './Controllers/PostsController.js';
import { Post } from './Models/Post.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  postsController = new PostsController();
}

// @ts-ignore
window.app = new App()
