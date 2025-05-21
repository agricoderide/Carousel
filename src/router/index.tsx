import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from '../layouts/MainLayout.tsx'
import ProtectedRoute from '../components/ProtectedRoute' // Importando o componente de rota protegida

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Blog = lazy(() => import('../pages/Blog'))
const Login = lazy(() => import('../pages/Login'))
// const Post = lazy(() => import('../components/Post.tsx'))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<p>Carregando...</p>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path='login'
        element={
          <Suspense fallback={<p>Carregando...</p>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path='home'
        element={
          <Suspense fallback={<p>Carregando...</p>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path='about'
        element={
          <Suspense fallback={<p>Carregando...</p>}>
            <ProtectedRoute component={About} />{' '}
          </Suspense>
        }
      />
      <Route
        path='blog'
        element={
          <Suspense fallback={<p>Carregando...</p>}>
            <Blog />
          </Suspense>
        }
      />
      <Route
        path='blog/:id'
        element={
          <Suspense fallback={<p>Carregando...</p>}>{/* <Post /> */}</Suspense>
        }
      />
    </Route>,
  ),
  {
    basename: '/Carousel',
  },
)
