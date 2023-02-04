import React from "react"
import { Link } from "react-router-dom"

const NavBar = ({Logo,NewPost}) => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div class="container-fluid mx-5" >
        <Link className="nav-link" to={`/`}> <span class="navbar-brand mx-5 " style={{ color:  'rgb(61, 230, 9)' }} _msttexthash="378430" _msthash="350">{Logo}</span></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" _msthidden="A" _mstaria-label="320099" _msthash="351">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <Link to={`post`}>
            {
              NewPost === true ? (
                <button class="btn btn-outline-success mx-5"  type="submit">Add New Post</button>
              ) : null
            }
            </Link>


           
          </div>
        </div>
      </nav>
    )
}

export default NavBar