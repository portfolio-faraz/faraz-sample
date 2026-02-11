import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import './Navigation.css'

const Navigation = () => {
  const location = useLocation()

  return (
    <div className="navigation">
      <div className="nav-buttons">
        <Link to="/">
          <Button 
            variant={location.pathname === '/' || location.pathname === '/home' ? 'primary' : 'ghost'}
            size="small"
          >
            Home Page
          </Button>
        </Link>
        <Link to="/components">
          <Button 
            variant={location.pathname === '/components' ? 'primary' : 'ghost'}
            size="small"
          >
            Components
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Navigation
