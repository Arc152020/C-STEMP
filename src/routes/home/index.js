import React from 'react';
import { Link } from 'react-router-dom';




function home(){
    return(
        <main className="container">            
            <h3 className="animate__animated animate__fadeInUp animate__delay-0.5s"> C-STEMP Innovation Hub Jos </h3>
            <p className="animate__animated animate__fadeInUp animate__delay-0.7s">We Train, Inspire and Nuture</p>
            <Link to='/enrol' className="enrol">Enrol Now</Link>
           
        </main>
    )
}

export default home;