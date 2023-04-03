import React from 'react';
import { NavLink } from 'reactstrap';
import Navigation from './navigation';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
const Header = () => {
    return(
        <div>
            {/* <Navigation /> */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
           
            <Route path='/' exact render={() => <h1>Home</h1>} />
            <Route path='/about' exact render={() => <h1>About</h1>} />
            
        </div>
    );
}

export default Header;