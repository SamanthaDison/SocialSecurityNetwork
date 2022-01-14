import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";


function _drawAllPosts() {
    let template = ''
    ProxyState.posts.forEach(p => template += p.Template)
    document.getElementById('posts').innerHTML = template
}

export class PostsController {
    constructor() {
        ProxyState.on('posts', _drawAllPosts)
    }
}