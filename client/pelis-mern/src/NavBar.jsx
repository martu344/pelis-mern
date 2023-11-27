import {NavLink} from "react-router-dom"
import './sketch.css'

function NavBar(){

  const style={
    textDecoration:"none",
    color:"white",
    padding:"0 1.5rem",
  }
  
  return (
    <>
      <nav class="navbar navbar-expand-lg mx-6"> 
          <ul class="navbar-nav">
              <li class="nav-item mx-2"><NavLink to="/" className="sacarEnlace nav-link px-4 text-light">Home</NavLink></li>
              <li class="nav-item mx-2"><NavLink to="/schedule" className="sacarEnlace nav-link px-4 text-light">Schedule</NavLink></li>
              <li class="nav-item mx-2"><NavLink to="/movies" className="sacarEnlace nav-link px-4 text-light">Movies</NavLink></li>
              <li class="nav-item mx-2"><NavLink to="/news" className="sacarEnlace nav-link px-4 text-light">News</NavLink></li>
          </ul>
      </nav>
    </>
  );
}

export default NavBar;