export interface PostType {
  id: string
  description: string
  author: {
    email: string
    name: string
  }
  authorId: string
  content: string
  createdAt: string
  image: string
  title: string
}
