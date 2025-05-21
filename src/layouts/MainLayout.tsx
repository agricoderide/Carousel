import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import BasicBreadcrumbs from '../components/BasicBreadcrumbs'
import { Box, CssBaseline, Typography } from '@mui/material'

export default function MainLayout() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100vh',
          height: '100vh', // garante que ocupa tudo
        }}
      >
        <ResponsiveAppBar />

        <Box
          component='main'
          sx={{
            flexGrow: 1,
            overflow: 'auto', // scrolla o conteúdo aqui
            px: 2,
            py: 4,
          }}
        >
          <Box sx={{ maxWidth: '900px', mx: 'auto', width: '100%' }}>
            <BasicBreadcrumbs />
            <Outlet />
          </Box>
        </Box>

        <Box
          component='footer'
          sx={{
            py: 2,
            px: 2,
            textAlign: 'center',
            borderTop: '1px solid #ddd',
            backgroundColor: '#fff',
            fontSize: '0.9rem',
            color: '#555',
          }}
        >
          <Typography variant='body2'>
            &copy; {new Date().getFullYear()} Agricoderide Blog.
          </Typography>
        </Box>
      </Box>
    </>
  )
}
