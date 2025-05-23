import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const fetchUserData = async () => {
  const token = localStorage.getItem('token')

  if (!token) {
    throw new Error('User is not authenticated')
  }

  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/protected`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}

export const useAuth = () => {
  const navigate = useNavigate()

  console.log('useAuth hook called!!')

  const { data, error, isLoading } = useQuery({
    queryKey: ['userData'],
    queryFn: fetchUserData,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  })

  useEffect(() => {
    if (error) {
      console.error('Error fetching user data:', error)
      localStorage.removeItem('token')
      navigate('/login')
    }
  }, [error, navigate])

  return { data, error, isLoading }
}
