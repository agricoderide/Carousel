import { useLocation, Link as RouterLink } from 'react-router-dom'
import { Breadcrumbs, Typography, Link, Box } from '@mui/material'

export default function BreadcrumbNav() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)

  return (
    <Box sx={{ my: 2 }}>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' component={RouterLink} to='/'>
          Início
        </Link>
        {pathnames.map((segment, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const label = segment.charAt(0).toUpperCase() + segment.slice(1)

          return isLast ? (
            <Typography key={to} color='text.primary'>
              {label}
            </Typography>
          ) : (
            <Link
              key={to}
              underline='hover'
              color='inherit'
              component={RouterLink}
              to={to}
            >
              {label}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}
