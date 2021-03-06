import React, { useState } from 'react';
import firebase from '../../routes/enrol/firebase';
import {GiHouse } from 'react-icons/gi';
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";


function contact(){
    const [ yourname, setYourname ] = useState('');
    const [ youremail, setYouremail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ message, setMessage ] = useState('');

   

    function handleChange(event){
        const { name, value } = event.target;
        switch(name){
            case "yourname": setYourname(prevYourname => { return value}); break;
            case "youremail": setYouremail(prevYouremail => { return value}); break;
            case "subject": setSubject(prevSubject => { return value}); break;
            case "message": setMessage(prevMessage => { return value}); break;
            default: return;
        }
    }

    function forward(e){
        e.preventDefault();
        try{
            var result = firebase.firestore().collection("Contact").doc(youremail).set({
                name: yourname,
                email: youremail,
                subject: subject,
                message: message,
                timestamp: firebase.firestore.Timestamp.fromDate(new Date())
            });
            
                result.then(docRef =>{
                document.querySelector(".status").innerHTML = `<p id="success">Your message has been sent successfully</p>`;
               
            })}
            
            catch(err){
            result.catch(error => {
                    document.querySelector(".status").innerHTML = `<p id="failure">Oops! Error occured, Please retry again </p>`;
                }
            );}
            finally{
                setYourname(prevYourname => {return ""});
                setYouremail(prevYouremail => {return ""});
                setSubject(prevSubject => {return ""});
                setMessage(prevMessage => {return ""});
            }
        }
    return( 
        <div className="contact-page">
            <div className="contact-content">
                <div className="status"></div>
                <h3>Contact us</h3>
                <div className="contact-pane">
                    <aside className="left">
                        <dl>
                            <dt> <GiHouse /> </dt>
                            <dd>Plot 5 Citrus Estate New Abuja, Plateau State, Nigeria</dd>
                        </dl>
                        <dl>
                            <dt> <HiOutlineMail /> </dt>
                            <dd>info@cstemp.org</dd>
                            <dd>nenji.emmanuel@cstemp.org</dd>
                        </dl>

                        <dl>
                            <dt> <FiPhone /> </dt>
                            <dd>+234 901 1093 828</dd>
                            <dd>+234 706 0775 977</dd>
                        </dl>
                    </aside>

                    <form className="right" onSubmit={forward}>
                        <input type="text" placeholder="Your Name" onChange={handleChange} name="yourname" value={yourname}/><br />
                        <input type="text" placeholder="Your Email" onChange={handleChange} name="youremail" value={youremail}/> <br />

                        <input type="text" placeholder="Subject" onChange={handleChange} name="subject" value={subject}/> <br />
                        <textarea className="message" rows="10" onChange={handleChange} name="message" value={message}>
                            Message
                        </textarea> <br />
                        <button>Send Message</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default contact;