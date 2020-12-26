import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import favplanet from './favplanet';



const routing = (
  <Router>
    <div >
        <ul >
            <li><Link style={{color: 'white'}} to="/">Home</Link> &nbsp;</li>
            <li><Link style={{color: 'white'}} to="/fav">Favourites</Link></li>

        </ul>
    </div>
    <Route exact path = "/" component={App}/>
    <Route path = "/fav" component={favplanet}/>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);
