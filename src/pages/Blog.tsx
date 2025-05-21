import { Container } from '@mui/material'

import Grid from '@mui/material/Grid'
import Post from '../components/Post'

const posts = [
  {
    id: '1',
    title: 'Primeiro Post',
    description: 'Este é o primeiro post do blog.',
    image: '/assets/image-abstract-1.png',
  },
  {
    id: '2',
    title: 'Segundo Post',
    description: 'Algumas ideias interessantes aqui.',
    image: '/assets/image-abstract-2.png',
  },
  {
    id: '3',
    title: 'Terceiro Post',
    description: 'Mais conteúdo incrível vindo aí!',
    image: '/assets/image-business-1.png',
  },
]

export default function Blog() {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {posts.map(post => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, md: 6 }}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
