import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <h1 className="navbar-heading">The Blog Website</h1>
        <div className="links">
            <Link to="/" className="link">Home</Link>
            <Link to="/create" className="link">New Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar