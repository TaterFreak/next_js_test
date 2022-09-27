interface Posts {
    [key:string]: Post[]
}

interface Post {
    userId:number,
    id:number,
    title:string,
    body:string
}

export type {
    Posts,
    Post
}
