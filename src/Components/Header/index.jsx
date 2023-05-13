import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, optio ipsam! Necessitatibus ipsam voluptatum architecto quas deserunt, unde beatae debitis impedit magnam odio iusto vel perspiciatis vitae, esse maiores quasi corporis autem. Excepturi asperiores non vel iste nam praesentium tempore, exercitationem eos? Eligendi officiis error alias praesentium hic accusantium optio obcaecati et eius temporibus, atque odio officia quo!
            
          </p>
          <h1>Blog</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae nobis temporibus labore. Commodi sapiente enim est accusamus eveniet esse dolorem quibusdam? Facere reiciendis, ex explicabo quisquam dolore voluptatem laboriosam.

          </p>
          <NavLink to="/blog" >
            <button>blogs</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header