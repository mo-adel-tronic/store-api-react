import { NavLink } from "react-router-dom"

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">
      Logo
    </a>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* update 1: change me to ms */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to={'/'}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/about'}>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar