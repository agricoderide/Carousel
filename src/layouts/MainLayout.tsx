import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function MainLayout() {
  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <Outlet />
      </main>
      <footer style={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Agricoderide Blog. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#f9f9f9',
  },
  main: {
    flex: 1,
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
    width: '100%',
  },
  footer: {
    padding: '1rem',
    textAlign: 'center' as const,
    borderTop: '1px solid #ddd',
    backgroundColor: '#fff',
    fontSize: '0.9rem',
    color: '#555',
  },
}
