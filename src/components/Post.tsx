import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import type { PostType } from '../types/post'
import { formatDate } from '../utils/common'

export default function Post({ post }: { post: PostType }) {
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
