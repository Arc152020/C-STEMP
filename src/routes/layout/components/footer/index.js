import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../enrol/firebase';



function footer(){

    const [email, setEmail ] = useState('');
    const ref = firebase.firestore().collection("Newsletter");

    function handleEmail(event){
        setEmail(prevEmail => { return event.target.value } );
    }

    function subscribe(e){
        e.preventDefault();
        ref.add({email:email}).then(docRef =>{
            setEmail(prevEmail => {return ""})
        }).catch(error => {
            console.error(error);
        })
        
    }
    return(
        <div className="footer-container">
            <footer className="top">
                <div className="top-content">
                    <address>
                    <p> Location: <br />Plot 5 Citrus Estate New Abuja, Plateau State, Nigeria</p>
                    <p>Email: marcus.simon@cstemp.org</p>
                    <p>Phone: 08034477604</p>
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
                </form>


                </div>
            </footer>
            <footer className="bottom">
                    <div className="bottom-content">
                        <p className="copyright">&copy; 2021 C-STEMP Ltd/Gte</p>
                    
                        <p className="social-media-icons">
                            <a href="https://www.facebook.com/C-Stemp-Innovation-Centre-106411324587971"> <img src='/src/assets/img/fb.png' className="fb" /></a>
                            <a href=""> <img src='/src/assets/img/twitter.png' className="tw" /></a>
                            <a href="https://www.instagram.com/_cstempinnovationcentre/"> <img src='/src/assets/img/instagram.png' className="ig" /></a>
                            <a href=""> <img src='/src/assets/img/link.png' className="li" /></a>
                        </p>
                    </div>

            </footer>
        </div>
        
    )
}

export default footer;