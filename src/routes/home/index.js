import React from 'react';
import { Link } from 'react-router-dom';
import About from '../about/index';



function home(){
    return(
        <main className="container">            
            <h3 className="textline"> C-STEMP Innovation Hub Jos </h3>
            <p className="subtextline">We Train, Inspire and Nuture</p>
            <Link to='/enrol' className="enrol">Enrol for our Courses</Link>
           
        </main>
    )
}

export default home;