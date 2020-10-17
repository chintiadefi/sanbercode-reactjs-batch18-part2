import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./Navbar.css"
import Tugas9 from '../Tugas-9/tugas9';
import Tugas10 from '../Tugas-10/tugas10';
import Tugas11 from '../Tugas-11/tugas11';
import Tugas12 from '../Tugas-12/tugas12';
import Tugas13 from '../Tugas-13/tugas13';
import Tugas14 from '../Tugas-14/tugas14';

const Navbar = () => {
    return(
        <Router>
            <nav>
                <li><Link to='/'>Tugas 9</Link></li>
                <li><Link to='/tugas10'>Tugas 10</Link></li>
                <li><Link to='/tugas11'>Tugas 11</Link></li>
                <li><Link to='/tugas12'>Tugas 12</Link></li>
                <li><Link to='/tugas13'>Tugas 13</Link></li>
                <li><Link to='/tugas14'>Tugas 14</Link></li>
            </nav>

            <Switch>
                <Route path='/' exact component={Tugas9}/>
                <Route path='/tugas10' exact component={Tugas10}/>
                <Route path='/tugas11' exact component={Tugas11}/>
                <Route path='/tugas12' exact component={Tugas12}/>
                <Route path='/tugas13' exact component={Tugas13}/>
                <Route path='/tugas14' exact component={Tugas14}/>
            </Switch>
        </Router>
    );
}

export default Navbar