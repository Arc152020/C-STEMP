import React from 'react';


function course(){
    return(
        <div className="course-container">
            <h3>Courses we offer </h3>
            
            <div className="front">  
                <dl>
                    <dt>Frontend Web Programming</dt>
                    <dd>We equiped you with HTML, CSS, JS, React, and Wordpress</dd>
                </dl>
            </div>

            <div className="back">  
                <dl>
                    <dt>Backend Web Programming</dt>
                    <dd>We train you in NodeJS and Express Framework, MongoDB and and Mongoose ORM Library and DevOps Technology: GitHub, Firebase</dd>
                </dl>
            </div>

            <div className="graphic">  
                <dl>
                    <dt>Graphic and UI/UX Design</dt>
                    <dd>We transform into modern graphic and UI/UX Designer</dd>
                </dl>
            </div>

            <div className="front">  
                <dl>
                    <dt>AR/VR and Drones</dt>
                    <dd>We trained our enrolled students into AI world with focus on AR/VR and Drones Techonology</dd>
                </dl>
            </div>

        </div>
    )
}

export default course;