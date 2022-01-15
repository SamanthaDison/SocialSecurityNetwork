export class Post {
  constructor(data) {
    this.title = data.title
    this.body = data.body
    this.creator = data.creator
    this.imgUrl = data.imgUrl || 'http://placehold.it/300x300'
    this.id = data._id
  }

  // NEED TO INTERPOLATE FOR THE TEMPLATE

  get Template() {
    return `<div class="col-12 post-col">
          <div class="row bg-white rounded shadow p-1 m-2">
            <div class="col-3">
              <div>
                <img class="post-img img-fluid"
                  src="${this.imgUrl}"
                  alt="">
              </div>
            </div>
            <div class="col-9">
              <div class="p-3">
                <div class="d-flex justify-content-between">
                  <h1>${this.title}</h1>
                  <i class="mdi mdi-comment-plus-outline fs-1 selectable"></i>
                </div>
                <p class="pt-4">${this.body}</p>
              </div>
              <div class="row justify-content-end align-self-end">
                <div class="col-4 d-flex align-items-center justify-content-end">
                  <p class="pr-2">${this.creator.name}</p>
                  <img class="profile-picture"
                    src="${this.creator.picture}"
                    alt="OLD LADY">
                </div>
              </div>
            </div>
          </div>
        </div>`
  }

}