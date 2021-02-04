import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../enrol/firebase';
import {GiHouse } from 'react-icons/gi';
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";



function footer(){

    const [email, setEmail ] = useState('');
    
    function handleEmail(event){
        setEmail(prevEmail => { return event.target.value } );
    }

    function subscribe(e){
        e.preventDefault();

        try{
        var result = firebase.firestore().collection("Newsletter").doc(email).set({email:email});
        result.then(docRef =>{
            document.querySelector(".status").innerHTML = `<p id="success">Thanks for Subscribing</p>`

        })}

        catch(err){
        result.catch(error => {
            document.querySelector(".status").innerHTML = `<p id="failure">Please Try again</p>`
        })}
        finally{
        setEmail(prevEmail => {return ""});
        }

    }
    return(
        <div className="footer-container">
            <footer className="top">
                <div className="top-content">
                    <address>
                    <p> <GiHouse /> Plot 5 Citrus Estate New Abuja, Plateau State, Nigeria</p>
                    <p><HiOutlineMail /> nenji.emmanuel@cstemp.org</p>
                    <p> <FiPhone /> +234 901 1093 828</p>
                    </address>
                   
                   
                  <div className="useful-links">
                       <h4>Useful Links</h4>
                       <a href="https://www.cstemp.org"> C-STEMP Organisation</a> <br />
                       <a href="https://www.cstempedutech.com">C-STEMP EduTech</a> <br />
                       <a href="https://www.siteworx.ng.com">C-STEMP Siteworx</a> <br />
                       <a href="https://innovate.cstemp.org/otukpo/">C-STEMP Otukpo Innovation Hub</a> <br />
                  </div>
                  <div className="courses">
                       <h4>Our Trainings</h4>
                       <Link to="/enrol">Frontend Web Development</Link> <br />
                       <Link to="/enrol">Backend Web Development</Link> <br />
                       <Link to="/enrol">Graphic and UI/UX Design</Link> <br />
                       <Link to="/enrol">Python Programming</Link> <br />
                       <Link to="/enrol">Mobile Apps Development</Link> <br />
                       <Link to="/enrol">Digital Marketing</Link> <br />
                       <Link to="/enrol">AR/VR and Drones Technology </Link> <br /> 
                    </div> 

                <form onSubmit={subscribe} >
                    <label>Join our Newsletter </label><br />
                    <input type="text" placeholder="evelynsimon@gmail.com" value={email} onChange={handleEmail}/>
                    <button>Subscribe</button>
                    <div className="status"></div>
                </form>


                </div>
            </footer>
            <footer className="bottom">
                    <div className="bottom-content">
                        <p className="copyright">&copy; 2021 C-STEMP Ltd/Gtee</p>
                    
                        <p className="social-media-icons">
                            <a href="https://www.facebook.com/C-Stemp-Innovation-Centre-106411324587971"> <img src='/src/assets/img/fb.png' className="fb" /></a>
                            <a href="#"> <img src='/src/assets/img/twitter.png' className="tw" /></a>
                            <a href="https://www.instagram.com/_cstempinnovationcentre/"> <img src='/src/assets/img/instagram.png' className="ig" /></a>
                            <a href="#"> <img src='/src/assets/img/link.png' className="li" /></a>
                        </p>
                    </div>

            </footer>
        </div>
        
    )
}

export default footer;