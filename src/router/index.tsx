import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from '../layouts/MainLayout'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Blog = lazy(() => import('../pages/Blog'))
const Post = lazy(() => import('../pages/Post'))

const isProd = import.meta.env.MODE === 'production'

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
        path='about'
        element={
          <Suspense fallback={<p>Carregando...</p>}>
            <About />
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
          <Suspense fallback={<p>Carregando...</p>}>
            <Post />
          </Suspense>
        }
      />
    </Route>,
  ),
  {
    basename: isProd ? '/Carousel/' : '/',
  },
)
