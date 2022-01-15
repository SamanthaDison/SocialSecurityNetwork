import { Comment } from "../../models/Comment.js";


export function getCommentForm(commentData = {}) {
  const newComment = new Comment(commentData)
  console.log('comment data object in form', newComment)

  return /*html*/`
<form onsubmit="app.commentsController.createComment('${newComment.id}')" >
  
  <div class='mb-3 d-flex justify-content-between'>
  <div>
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" name="title" id="title" aria-describedby="title" placeholder="Title..."
      value="${newComment.title}" required>
  </div>
  <div>
    <label for="body" class="form-label">Body</label>
    <input type="text" class="form-control" name="body" id="body" aria-describedby="body" placeholder="Body..."
      value="${newComment.body}" required>
  </div>
  

</div>
</form>`

}