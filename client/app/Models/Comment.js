export class Comment {
    constructor(data) {
        this.body = data.body
        this.creator = data.creator

    }


    get Template() {
        return `<div class="col-12  bg-dark text-light rounded">
          <div class="row">
            <div class="col-12 p-3">
              <p>${this.body}</p>
            </div>
            <div class="col-12 d-flex justify-content-end align-items-end">
              <p class="pr-2">${this.creator.name}</p>
              <img class="profile-picture-comments"
                src="${this.creator.picture}"
                alt="OLD LADY">
            </div>
          </div>
        </div>`

    }
}


