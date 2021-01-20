import React from 'react';
import { Link } from 'react-router-dom';


function course(){
    return(
        <div className="course-container">
            <h3> Our Courses </h3>
            
            <div className="front">  
            <figure>
                <img src="/src/assets/img/htmlcssjs.jpeg" alt="HTML5 CSS3 JS Logo" />
                <img src="/src/assets/img/reacttypescript.jpeg" alt="React TypeScript logo" />
                <img src="/src/assets/img/wordpress.png" alt="WordPress Logo" />
            </figure>
                <dl>
                    <dt>Frontend Web Development Training</dt>
                    <dd>
                        <ul>
                            <li>Languages/Framework/CMS: HTML5, CSS3, JavaScript(CS6), React and WordPress </li>
                            <li>Duration: 4 Months (3 Months for training and 1 Month for Project) </li>
                            <li>Monetary Cost: ₦30,000.00</li>
                        </ul>
                    </dd>
                </dl>
                <Link to='/enrol' className="enrol">Enrol for Frontend Web Development Training</Link>
            </div>

            <div className="back">  
            <figure>
                <img src="/src/assets/img/nodejs2.png" alt="NodeJS logo" />
                <img src="/src/assets/img/express.png" alt="Express Logo" />
                <img src="/src/assets/img/mongodb.png" alt="MongoDB Logo" />
                <img src="/src/assets/img/github.png" alt="GitHub Logo" />
               
            </figure>
                <dl>
                    <dt>Backend Web Development Training</dt>
                    <dd>
                        <ul>
                            <li>Languages/Framework/Database: NodeJS, Express, MongoDB and GitHub</li>
                            <li>Duration: 4 Months (3 Months for training and 1 Month for Project)</li>
                            <li>Monetary Cost: ₦45,000.00</li>
                        </ul>
                    </dd>
                </dl>
                <Link to='/enrol' className="enrol">Enrol for Backend Web Development Training</Link>
            </div>

            <div className="graphic"> 
            <figure>
                <img src="/src/assets/img/every.jpeg" alt="PhotoShop Illustrator, inDesign and CorelDraw" />
                
            </figure> 
                <dl>
                    <dt>Graphics and UI/UX Design Training</dt>
                    <dd> <ul>
                            <li>Suites: Adobe Suites and Corel Suites </li>
                            <li>Duration: 4 Weeks</li>
                            <li>Monetary Cost: ₦30,000.00</li>
                        </ul>
                    </dd>
                </dl>
                <Link to='/enrol' className="enrol">Enrol for Graphics and UI/UX Design Training</Link>
            </div>

            <div className="mobile"> 
            <figure>
                <img src="/src/assets/img/flutter.png" alt="Flutter Logo" />
                <img src="/src/assets/img/phones.png" alt="Phones" />
                
             
            </figure> 
                <dl>
                    <dt>Mobile Apps Development Training</dt>
                    <dd>
                    <ul>
                            <li>Language/Framework: Dart, Flutter</li>
                            <li>Duration: 4 Months (3 Months for training and 1 Month for Project)</li>
                            <li>Monetary Cost: ₦45,000.00</li>
                        </ul>
                    </dd>
                </dl>
                <Link to='/enrol' className="enrol">Enrol for Mobile Development Training</Link>
            </div>

            <div className="python"> 
            <figure>
                <img src="/src/assets/img/pythonlogo.jpeg" alt="Flutter Logo" />
               
            </figure> 
                <dl>
                    <dt>Python Programming Training</dt>
                    <dd>
                    <ul>
                            <li>Language: Python 3.X.X</li>
                            <li>Duration: 4 Months (3 Months for training and 1 Month for Project) </li>
                            <li>Monetary Cost: ₦45,000.00</li>
                        </ul>
                    </dd>
                </dl>
                <Link to='/enrol' className="enrol">Enrol for Python Programming Training</Link>
            </div>


            <div className="digitalMarketing"> 
            <figure>
                <img src="/src/assets/img/dm.jpeg" alt="Digital marketing logo" />
                
            </figure> 
                <dl>
                    <dt>Digital Marketing Training</dt>
                    <dd>
                        <ul>
                            <li>Digital Marketing, Social Media Advertisement and Content Creation </li>
                            <li>Duration: 4 Weeks</li>
                            <li>Monetary Cost: ₦30,000.00</li>
                        </ul>
                    </dd>
                </dl>
                <Link to='/enrol' className="enrol">Enrol for Digital Marketing Training</Link>
            </div>



            <div className="airv">  
            <figure>
                <img src="/src/assets/img/arvr.jpeg" alt="AR VR Headset" />
                <img src="/src/assets/img/oculus.png" alt="Oculus Brand logo" />
                <img src="/src/assets/img/drones.png" alt="Drone Logo" />
            </figure> 
                <dl>
                    <dt>AR/VR and Drones Technology Training</dt>
                    <dd>
                    <ul>
                            <li>Augmented Reality, Virtual Reality and Drone Technology </li>
                            <li>Duration: 4 Months (3 Months for training and 1 Month for Project)</li>
                            <li>Monetary Cost: ₦45,000.00</li>
                        </ul>
                    </dd>
                </dl>
                <Link to='/enrol' className="enrol">Enrol for AR/VR and Drones Training</Link>
            </div>

        </div>
    )
}

export default course;