import React from 'react';
import { Link } from 'react-router-dom';


function header(){
    return(
        <div className="fixed">
        <header>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/course'>Course</Link>
                <Link to='/' className="logo"><img src="/src/assets/img/smalllogo.jpg" alt="cstemp-logo" id="logo"/></Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/enrol' className="enrol-header">Enrol</Link>
            
        </header>
        </div>
        
    )
}

export default header;