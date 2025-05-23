import { useEffect, useState } from 'react'
import { Container, Grid, CircularProgress } from '@mui/material'
import axios from 'axios'
import Post from '../components/Post'
import type { PostType } from '../types/post'

const Blog = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token')

        if (!token) {
          setError('Token is missing')
          setLoading(false)
          return
        }

        const response = await axios.get<PostType[]>(
          `${import.meta.env.VITE_API_URL}/posts/feed`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )

        console.log('Posts fetched:', response)

        setPosts(response.data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError('Failed to fetch posts')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <Container sx={{ py: 4 }}>
        <CircularProgress />
      </Container>
    )
  }

  if (error) {
    return (
      <Container sx={{ py: 4 }}>
        <p>{error}</p>
      </Container>
    )
  }

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {posts.map(post => (
          <Grid key={post.id}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Blog
