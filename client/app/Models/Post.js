export class Post {
  constructor(data) {
    this.title = data.Title
    this.body = data.Body
    this.creator = data.creator
    this.imgUrl = data.picture
    this.id = data._id
    this.votes = 0
  }

  // NEED TO INTERPOLATE FOR THE TEMPLATE

  get Template() {
    return `  <div class="col-12">
          <div class="row bg-white rounded shadow p-1 m-2">
            <div class="col-3">
              <div class="position-relative">
                <i class="mdi mdi-trash-can position-absolute top-0 fs-1 delete"></i>
              </div>
              <div>
                
              </div>
            </div>
            <div class="col-9">
              <div class="d-flex align-items-between flex-column">
                <div class="p-3">
                  <div class="d-flex justify-content-between">
                    <h1>${this.title}</h1>
                    <i class="mdi mdi-comment-plus-outline fs-1 selectable" onclick="app.commentsController.getCommentsByPostId('${this.id}')" data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
                  </div>
                  <p class="pt-4">${this.body}</p>
                </div>
                <div class="row d-flex height align-items-end">
                  <div class="col-6">
                    <div class="d-flex justify-content-center">
                      <i class="mdi mdi-emoticon-happy fs-3"></i>
                      <div class="text-end">
                        <p class="fs-3">${this.votes}</p>
                      </div>
                      <i class="mdi mdi-emoticon-angry fs-3"></i>
                    </div>
                  </div>
                  <div class="col-6 d-flex align-items-center justify-content-end">
                    <p class="pr-2">${this.creator.name}</p>
                    <img class="profile-picture"
                      src="${this.imgUrl}"
                      alt="OLD LADY">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
  }

}