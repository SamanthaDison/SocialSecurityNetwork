import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";
import { getPostForm } from "./Component/PostForm.js";



function _drawPosts() {
    // const posts = ProxyState.posts
    let template = ''
    ProxyState.posts.forEach(p => template += p.Template)

    document.getElementById('posts').innerHTML = template
}

export class PostsController {
    constructor() {
        ProxyState.on('posts', _drawPosts)
        postsService.getAllPosts()
        console.log('posts')
    }
    drawPosts() {
        _drawPosts()
    }

    showPostForm() {
        document.getElementById('modal-body-slot').innerHTML = getPostForm()

    }

    async createPost(id) {
        try {
            window.event.preventDefault()
            console.log('submitted')
            const form = window.event.target
            const postData = {
                // @ts-ignore
                title: form.title.value,
                // @ts-ignore
                body: form.body.value,
                // @ts-ignore
                imgUrl: form.body.value

            }
            if (id == "undefined") {
                await postsService.createPost(postData)
            }
            else {
                await postsService.editPost(postData, id)
            }
            // @ts-ignore
            form.reset()

            // @ts-ignore
            bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
        } catch (error) {
            console.log(error.message)
        }
    }


    async editPost(id) {
        try {
            let foundPost = ProxyState.posts.find(p => p.id == id)
            // @ts-ignore
            bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).toggle()
            document.getElementById('modal-body-slot').innerHTML = getPostForm(foundPost)

        } catch (error) {
            console.log('error message in posts controller')
        }
    }

    async removePost(id) {
        try {
            const foundPost = ProxyState.posts.find(p => p.id == id)
            console.log('found post for delete', foundPost)
            if (await confirm(`Are you sure you want to delete ${foundPost.model}?`)) {

            }

        } catch (error) {
            console.log('error.messge')
        }
    }

}