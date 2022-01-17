import { ProxyState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { api } from "../Services/AxiosService.js"




class CommentsService {
  async getAllComments() {
    const res = await api.get('api/comments')
    console.log('getting all comments', res.data)
  }

  async getCommentsByPostId(postId) {
    const res = await api.get(`api/posts/${postId}/comments`)
    ProxyState.comments = res.data.map(c => new Comment(c))
    console.log('comments in proxy', ProxyState.comments)
  }

  async createComment(commentData) {
    const res = await api.comment('comments', commentData)
    console.log('post comment res', res.data)
    ProxyState.comments = [new Comment(res.data), ...ProxyState.comments]
  }

  async editComment(commentData, id) {
    const res = await api.put(`comments/${id}`, commentData)
    let editedCommentIndex = ProxyState.comments.findIndex(c => c.id == id)
    ProxyState.comments.splice(editedCommentIndex, 1, new Comment(res.data))
    ProxyState.comments = ProxyState.comments

  }

  async removeComment(id) {
    const res = await api.delete(`comments/${id}`)
    console.log('deleted comment res', res)
    ProxyState.comments = ProxyState.comments.filter(c => c.id !== id)
  }
}

export const commentsService = new CommentsService()