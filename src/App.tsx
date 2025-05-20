import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export default function App() {
  // process.env.NODE_ENV
  console.log('NODE_ENV', process.env.NODE_ENV)

  return <RouterProvider router={router} />
}
