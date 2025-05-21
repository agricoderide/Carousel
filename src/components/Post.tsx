import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function Post({
  post,
}: {
  post: { id: string; title: string; description: string; image: string }
}) {
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
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
