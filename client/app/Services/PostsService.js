import { ProxyState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { api } from "../Services/AxiosService.js"




class PostsService {
  async getAllPosts() {
    const res = await api.get('api/posts')
    console.log('getting all post', res.data)
    ProxyState.posts = res.data.map(p => new Post(p))
    console.log('posts in proxy', ProxyState.posts)
  }

  async createPost(postData) {
    const res = await api.post('posts', postData)
    consol.log('post post res', res.data)
    ProxyState.posts = [new Post(res.data), ...ProxyState.posts]
  }

  async editPost(postData, id) {
    const res = await api.put('posts/${id}', postData)
    let editedPostIndex = ProxyState.posts.findIndex(p => p.id == id)
    ProxyState.posts.splice(editedPostIndex, 1, new Post(res.data))
    ProxyState.posts = ProxyState.posts

  }

  async removePost(id) {
    const res = await api.delete('posts/${id}')
    console.log('deleted post res', res)
    ProxyState.posts = ProxyState.posts.filter(p => p.id !== id)
  }
}

export const postsService = new PostsService()