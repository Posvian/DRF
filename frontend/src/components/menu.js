import React from "react";
import {Link, BrowserRouter} from "react-router-dom";


class Menu extends React.Component{
  constructor(props) {
    super(props);
  }

  render(is_auth) {
    return(
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
              <li>
                {/*{this.is_auth() ? <button onClick={()=>this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}*/}
              </li>
              {/*<li><a href="#">О нас</a></li>*/}
            </ul>
          </nav>
    )

  }
}

export default Menu