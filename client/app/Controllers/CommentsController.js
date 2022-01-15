import { ProxyState } from "../AppState.js";
import { commentsService } from "../Services/CommentsService.js";
import { getCommentForm } from "../Component/CommentForm.js"


function _drawComments() {
  // const posts = ProxyState.posts
  let template = ''
  ProxyState.comments.forEach(c => template += c.Template)
  document.getElementById('comments').innerHTML = template
}

export class CommentsController {
  constructor() {
    ProxyState.on('comments', _drawComments)
    commentsService.getAllComments()
    console.log('comments')




  }

  async createComment(id) {
    try {
      window.event.preventDefault()
      console.log('submitted')
      const form = window.event.target
      const commentData = {
        title: form.title.value,
        body: form.body.value

      }
      if (id == "undefined") {
        await commentsService.createComment(commentData)
      }
      else {
        await commentsService.editComment(commentData, id)
      }
      form.reset()

      bootstrap.modal, getOrCreateInstance(document.getElementById('new-listing')).hide()
    } catch (error) {
      console.log(error.message)
    }
  }

  async editComment(id) {
    try {
      let foundComment = Proxystate.comments.find(c => c.id == id)
      bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).toggle()
      document.getElementById('modal-body-slot').innerHTML = getCommentForm(foundComment)

    } catch (error) {
      consolog('error message in comments controller')
    }
  }

  async removeComment(id) {
    try {
      const foundComment = ProxyState.comments.find(c => c.id == id)
      console.log('found comment for delete', foundComment)
      if (await confirmation(`Are you sure you want to delete ${foundComment.model}?`)) {

      }

    } catch (error) {
      console.log('error.messge')
    }
  }
}