import { Post } from "../../models/Post.js";


export function getPostForm(postData = {}) {
  const newPost = new Post(postData)
  console.log('post data object in form', newPost)

  return /*html*/`
<form onsubmit="app.postsController.createPost('${newPost.id}')" >
  
  <div class='mb-3 d-flex justify-content-between'>
  <div>
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" name="title" id="title" aria-describedby="title" placeholder="Title..."
      value="${newPost.title}" required>
  </div>
  <div>
    <label for="body" class="form-label">Body</label>
    <input type="text" class="form-control" name="body" id="body" aria-describedby="body" placeholder="Body..."
      value="${newPost.body}" required>
  </div>
  <div>
    <label for="imgUrl" class="form-label">imgUrl</label>
    <input type="Url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl" placeholder="imgUrl..."
      value="${newPost.imgUrl}" required>
  </div>

</div>
</form>`

}