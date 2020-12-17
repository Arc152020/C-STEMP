import React from 'react';
import { Link } from 'react-router-dom';
import env from 'react-dotenv';



function footer(){
    return(
        <div className="footer-container">
            <footer className="top">
                <div className="top-content">
                    <address>
                    <p>Plot 5 Citrus Estate New Abuja, Plateau State, Nigeria</p>
                    <p>Email: marcus.simon@cstemp.org</p>
                    <p>Phone: 08034477604</p>
                    </address>
                   
                   
                  <div className="useful-links">
                       <h4>Useful Links</h4>
                       <a href="https://www.cstemp.org"> C-STEMP Organisation</a> <br />
                       <a href="https://www.cstempedutech.com">C-STEMP EduTech</a> <br />
                       <a href="https://www.siteworx.ng.com">C-STEMP Siteworx</a> <br />
                       <a href="https://otukpo.cstemp.org">C-STEMP Otukpo Innovation Hub</a> <br />
                  </div>
                  <div className="courses">
                       <h4>Courses</h4>
                       <Link to="/register">Frontend Web Development</Link> <br />
                       <Link to="/register">Backend Web Development</Link> <br />
                       <Link to="/register">Graphic and UI/UX Design</Link> <br />
                       <Link to="/register">AR/VR and Robotics </Link> <br /> 
                    </div> 

                <form action='/subscribe'>
                    <label>Subscribe to our Newsletter </label>
                    <input type="text" placeholder="name@gmail.com" width="15" />
                    <button>Subscribe</button>
                </form>


                </div>
            </footer>
            <footer className="bottom">
                    <div className="bottom-content">
                        <p className="copyright">&copy; 2021 C-STEMP LTD</p>
                    
                        <p className="social-media-icons">
                            <img src='/src/assets/img/fb.png' className="fb" />
                            <img src='/src/assets/img/twitter.png' className="tw" />
                            <img src='/src/assets/img/instagram.png' className="ig" />
                            <img src='/src/assets/img/link.png' className="li" />
                        </p>
                    </div>

            </footer>
        </div>
        
    )
}

export default footer;