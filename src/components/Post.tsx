import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import type { PostType } from '../types/post'

// src/types/post.ts
// export interface PostType {
//   id: string;
//   description: string;
//   author: {
//     email: string;
//     name: string;
//   };
//   authorId: string;
//   content: string;
//   createdAt: string;
//   image: string;
//   title: string;
// }

export default function Post({ post }: { post: PostType }) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }
    return new Date(dateString).toLocaleDateString('pt-BR', options)
  }
  const formattedDate = formatDate(post.createdAt)

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component='img'
        height='180'
        image={post.image}
        alt={post.title}
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {post.title}
          {post.author.name && (
            <Typography variant='body2' color='text.secondary'>
              {post.author.email} - {post.author.name} - {formattedDate}
            </Typography>
          )}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {post.content}
        </Typography>
      </CardContent>
    </Card>
  )
}
