import { Post } from "../../models/Post.js";


export function getPostForm(postData = {}) {
  const newPost = new Post(postData)
  console.log('post data object in form', newPost)

  return /*html*/`
<form onsubmit="app.postsController.createPost('${newPost.id}')" >
  
  <div class='mb-3 justify-content-between'>
  <div>
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" name="title" id="title" aria-describedby="title" placeholder="Title..."
      value="${newPost.title}" required>
  </div>
  <div>
    <label for="body" class="form-label">Body</label>
    
    <input type="text" class="form-control input-large form-body" name="body" id="body" aria-describedby="body" placeholder="Body..."
      value="${newPost.body}" required>
  </div>
  <div>
    <label for="imgURL" class="form-label">Image</label>
    <input type="url" class="form-control" name="imgURL" id="imgURL" aria-describedby="imgURL" placeholder="imgURL..."
      value="${newPost.imgUrl}" required>
  </div>

</div>
</form>`

}