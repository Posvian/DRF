import React from "react";
import {Link, BrowserRouter} from "react-router-dom";



const Menu = () => {
    return (

          <nav>
            <ul className="menu">
              <li>
                <Link to='/'> Users</Link>
              </li>
              <li>
                <Link to='/projects'> Projects</Link>
              </li>
              <li>
                <Link to='/todo'> Todo </Link>
              </li>
              {/*<li><a href="#">О нас</a></li>*/}
            </ul>
          </nav>

    )
}

export default Menu