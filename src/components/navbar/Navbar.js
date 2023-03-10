import { Link } from 'react-router-dom'
import './Navbar.css'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
  const path = useLocation().pathname;
   const [currentUser, setCurrentUser] = useState(true);  
   const displayName ="Mustafa"
  return <div className="navbar">
    <div className="title">
      <Link style={{textDecoration: 'none'}}
      to={`${path === '/' ? '/comments' : '/'}`} >
        
      <div className="h1">
        Movie<span>DataBase</span>
        {currentUser && path === "/" && <h6>Comment Page</h6> }
        {currentUser && path === "/comments" && <h6>Home Page</h6> }
        
     
      </div>
      </Link>
    </div>
    <div className="logout">
      <h6>{displayName}</h6>
      <button>Log out</button>
    </div>
  </div>
  
}

export default Navbar