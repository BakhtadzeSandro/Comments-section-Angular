export interface NewComment{
    id: number,
    content: string,
    createdAt: string,
    score: number,
    user: {
      image: {
        png: string,
        webp: string
      },
      username: string,
    }
    replies: [];
}
  
export interface NewReply{
    id: number,
    content: string,
    createdAt: string,
    score: number,
    replyingTo: string,
    user: {
      image: {
        png: string,
        webp: string,
      }
      username: string
    }
}