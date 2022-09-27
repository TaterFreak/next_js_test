interface Photos {
    [key:string]: Photo[]
}

interface Photo {
    albumId:number,
    id:number,
    title:string,
    url:string,
    thumbnailUrl:string
}

export type {
    Photos,
    Photo
}
