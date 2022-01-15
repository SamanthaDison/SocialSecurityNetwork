import { ProxyState } from "../AppState.js";
import { commentsService } from "../Services/CommentsService.js";


function _drawComments() {
  // const posts = ProxyState.posts
  let template = ''
  ProxyState.comments.forEach(c => template += c.Template)
  document.getElementById('comments').innerHTML = template
}

export class CommentsController {
  constructor() {
    ProxyState.on('comments', _drawComments)
    // commentsService.getAllComments()
    console.log('comments')
  }

  async getCommentsByPostId(postId) {
    try {
      commentsService.getCommentsByPostId(postId)
    } catch (error) {
      console.log(error)
    }
  }

  async createComment(id) {
    try {
      window.event.preventDefault()
      console.log('submitted')
      const form = window.event.target
      const commentData = {
        // @ts-ignore
        title: form.title.value,
        // @ts-ignore
        body: form.body.value

      }
      if (id == "undefined") {
        await commentsService.createComment(commentData)
      }
      else {
        await commentsService.editComment(commentData, id)
      }
      // @ts-ignore
      form.reset()

      // @ts-ignore
      bootstrap.modal, getOrCreateInstance(document.getElementById('new-listing')).hide()
    } catch (error) {
      console.log(error.message)
    }
  }

  async editComment(id) {
    try {
      // @ts-ignore
      let foundComment = ProxyState.comments.find(c => c.id == id)
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).toggle()

    } catch (error) {
      console.log('error message in comments controller')
    }
  }

  async removeComment(id) {
    try {
      const foundComment = ProxyState.comments.find(c => c.id == id)
      console.log('found comment for delete', foundComment)
      if (await confirm(`Are you sure you want to delete ${foundComment.model}?`)) {

      }

    } catch (error) {
      console.log('error.messge')
    }
  }
}