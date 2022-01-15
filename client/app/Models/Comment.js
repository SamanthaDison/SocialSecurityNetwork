export class Comment {
    constructor(data)


    get Template() {
        return `<div class="col-12  bg-dark text-light rounded">
          <div class="row">
            <div class="col-12 p-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vero, veniam eos debitis numquam vitae
                consequuntur unde ad. Voluptate, saepe unde quos aspernatur deleniti voluptas aliquam ex ullam? Id,
                tenetur.</p>
            </div>
            <div class="col-12 d-flex justify-content-end align-items-end">
              <p class="pr-2">AUTHOR NAME</p>
              <img class="profile-picture-comments"
                src="https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                alt="OLD LADY">
            </div>
          </div>
        </div>`

    }
}


