import React, { useState, Fragment, useEffect, useContext } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import  enrolContext from './enrolContext';
import firebase from './firebase';



const CourseInfo = () => {
    const { url } = useRouteMatch();
    const [person, update] = useContext(enrolContext);
    const [course, setCourse ] = useState(person.course);
    

    function selectCourse(event){
        setCourse(prevCourse => {
            return event.target.value;
        });}

        useEffect(() => {
            update({course})
        }, [course]);
        
    return (
        <Fragment>
            <fieldset>
                <legend>Choose Course to enrol</legend>
                <select name="course" value={course} onChange={selectCourse} >
                    <option value="">--- Choose Course ---</option>
                    <option value="Web Development (Frontend)">Frontend Web Programming</option>
                    <option value="Web Development (Backend)">Backend Web Programming</option>
                    <option value="Graphic Design and UI/UX">Graphic and UI/UX Design </option>
                    <option value="Mobile App Development">Mobile Apps Development </option>
                    <option value="Python Programming">Python Programming </option>
                    <option value="Digital Marketing">Digital Marketing </option>
                    <option value="AR/VR and Drone Technology">AR/VR and Drones Technology </option>
                </select>

                <Link to={`${url}/personalinfo`}>Save and Continue</Link>
            </fieldset>
            
            
        </Fragment>
    );
}

const PersonalInfo = () => {
    const [person, update] = useContext(enrolContext);
    const [firstName, setFirstName ] = useState(person.firstName);
    const [lastName, setLastName ] = useState(person.lastName);
    const [dob, setDob ] = useState(person.dob);
    const [gender, setGender] = useState(person.gender);
    
    


    function handleChange(event){
        const {name, value } = event.target;
        switch(name){
        case "firstname": setFirstName(prevfn => { return value; }); break;
        case "lastname": setLastName(prevln => { return value; }); break;
        case "dob": setDob(prevdob => { return value; }); break;
        case "gender": setGender(prevgndr => { return value; }); break;
        default: return;
        };
    }

    useEffect(() => {
         update({firstName, lastName, dob, gender});
    }, [firstName, lastName, dob, gender]);

    return (
         <Fragment>
             <section className="cform-content"> 
                <fieldset>
                    <legend> Personal Information </legend>
                    <input type="text" placeholder="First Name" name="firstname" onChange={handleChange} value={firstName}/>
                    <input type="text" placeholder="Last Name" name="lastname" onChange={handleChange} value={lastName}/>
                    <label>Date of Birth</label>
                    <input type="date" placeholder="Date of Birth" name="dob" onChange={handleChange} value={dob} />
                    <label>Gender: &nbsp;
                    <input type="radio" name="gender" value="Male" onChange={handleChange} checked={gender === "Male"}/>Male &nbsp;
                    <input type="radio" name="gender" value="Female" onChange={handleChange} checked={gender === "Female"} />Female</label>
                   
                    <Link to="/enrol">Go back to Previous</Link>
                    <Link to={`/enrol/contactinfo`}>Save and Continue</Link>
                </fieldset>
                    
            </section>
        </Fragment>
    
);};

const ContactInfo = () => { 
    const [person, update] = useContext(enrolContext);
    const [ phone, setPhone ] = useState(person.phone);
    const [ email, setEmail ] = useState(person.email);
    const [ address, setAddress ] = useState(person.address);
    const [ city, setCity ] = useState(person.city);
    const [ state, setState ] = useState(person.state);
    

    function handleChange(event){
        const {name, value } = event.target;
        switch(name){
        case "phone": setPhone(prevphone => { return value; }); break;
        case "email": setEmail(prevemail => { return value; }); break;
        case "address": setAddress(prevaddress => { return value; }); break;
        case "city": setCity(prevcity => { return value; }); break;
        case "state": setState(prevstate => { return value; }); break;
        default: return;
        };
    }

    useEffect(() => {
        update({phone, email, address, city, state});
    }, [phone, email, address, city, state]);
    
    return (
        <Fragment>
            <section className="cform-content">
                <fieldset>
                    <legend>Contact Information</legend>
                        <input type="text" placeholder="Phone Number" name="phone" onChange={handleChange} value={phone}/>
                        <input type="email" placeholder="Email Address" name="email" onChange={handleChange} value={email}/>
                        <textarea name="address" onChange={handleChange} value={address} cols="20" rows="5">
                        Address
                        </textarea>
                        <input type="text" placeholder="Town/City of Resident" name="city" onChange={handleChange} value={city}/>
                        
                        <select name="state" value={state} onChange={handleChange}>
                            <option value="">--- State of Resident ---</option>
                            <option value="Abia">Abia</option>
                            <option value="Abuja">Abuja</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross Rivers">Cross Rivers</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebony">Ebony</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nassarawa">Nassarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>
                        </select>

                        <Link to={`/enrol/personalinfo`}>Go back to Previous</Link>
                        <Link to={`/enrol/educationinfo`}>Save and Continue</Link>
                    </fieldset>
            </section>
        </Fragment>
);}

const EducationInfo = () => {
    const [person, update] = useContext(enrolContext);
    const [education, setEducation ] = useState(person.education);
    
    function chooseQualification(event){
        setEducation(prevEducation => {
            return event.target.value;
        });}

        useEffect(() => {
            update({education});
        }, [education]);
        
    return(
        <Fragment>
            <section className="cform-content" value={education} onChange={chooseQualification}>
                <fieldset>
                    <legend> Educational Information </legend>
                    <label>Highest Education Qualification Obtained</label>
                    <select name="course">
                    <option value="">--- Choose Qualification ---</option>
                    <option value="O'level">WAEC/NECO/NABTECH</option>
                    <option value="Diploma/NCE">ND/OND/NCE</option>
                    <option value="Degree/HND">BSC/HND</option>
                    <option value="Master Degree">Postgraduate Degree</option>
                </select>

                <Link to={`/enrol/contactinfo`}>Go back to Previous</Link>
                <Link to={`/enrol/parentguardianinfo`}>Save and Continue</Link>  
                </fieldset>
            </section>
        </Fragment>

    )
}

const ParentGuadianInfo = () => {
    const [person, update] = useContext(enrolContext);
    const [ pgfirstname, setPGfirstname ] = useState(person.pgfirstname);
    const [ pglastname, setPGlastname ] = useState(person.pglastname);
    const [ pgphone, setPGphone ] = useState(person.pgphone);
    const [ pgemail, setPGemail ] = useState(person.pgemail);
    const [ pgaddress, setPGaddress ] = useState(person.pgaddress);
    const [ pgoccupation, setPGoccupation ] = useState(person.pgoccupation);
    

    function handleChange(event){
        const {name, value } = event.target;
        switch(name){
        case "pgfirstname": setPGfirstname(prevpgfn => { return value; }); break;
        case "pglastname": setPGlastname(prevpgfn => { return value; }); break;
        case "pgphone": setPGphone(prevpgphone => { return value; }); break;
        case "pgemail": setPGemail(prevpgemail => { return value; }); break;
        case "pgaddress": setPGaddress(prevpgaddress => { return value; }); break;
        case "pgoccupation": setPGoccupation(prevpgoccupation => { return value; }); break;
        default: return;
        };
    }

    useEffect(() => {
        update({pgfirstname, pglastname, pgphone, pgemail, pgaddress, pgoccupation});
    }, [pgfirstname, pglastname, pgphone, pgemail, pgaddress, pgoccupation ]);
   
    return (
        <Fragment>
        <section className="cform-content">
            <fieldset>
                <legend>Parent/Guardian Information </legend>
                     <input type="text" placeholder="First Name" name="pgfirstname" onChange={handleChange} value={pgfirstname}/>
                     <input type="text" placeholder="Last Name" name="pglastname" onChange={handleChange} value={pglastname}/>
                     <input type="text" placeholder="Phone Number" name="pgphone" onChange={handleChange} value={pgphone}/>
                    <input type="email" placeholder="Email Address" name="pgemail" onChange={handleChange} value={pgemail}/>
                     <textarea name="pgaddress" onChange={handleChange} value={pgaddress} cols="30" rows="5"> 
                    Residential Address
                    </textarea> 
                    <input type="text" placeholder="Occupation" name="pgoccupation" onChange={handleChange} value={pgoccupation}/>
                <Link to={`/enrol/contactinfo`}>Go back to Previous</Link>
                <Link to={`/enrol/otherinfo`}>Save and Continue</Link>
            </fieldset>
        </section>
    </Fragment>
    
);}

const OtherInfo = () =>{
    const [person, update] = useContext(enrolContext);
    const [onsitevirtual, setOnsitevirtaul ] = useState(person.onsitevirtual);
    const [josornot, setJosornot ] = useState(person.josornot);
    const [laptopornot, setLaptopornot] = useState(person.laptopornot);
    const [techlevel, setTechlevel] = useState(person.techlevel);
    

    function handleChange(event){
        const {name, value } = event.target;
        switch(name){
        case "virtualorsite": setOnsitevirtaul(prevonsitevirtual => { return value; }); break;
        case "josornot": setJosornot(prevjosornot => { return value; }); break;
        case "laptopornot": setLaptopornot(prevlaptopornot => { return value; }); break;
        case "techlevel": setTechlevel(prevtechlevel => { return value; }); break;
        default: return;
        };
    }
    useEffect(() => {
        update({onsitevirtual, josornot, laptopornot, techlevel });
    }, [onsitevirtual, josornot, laptopornot, techlevel]);
    return (
    <Fragment>
        <section className="cform-content">
            <fieldset>
                <legend>Other Information</legend>
                <label>Tell us how you wish to attend your classes? <input type="radio" name="virtualorsite" value="onsite" onChange={handleChange} checked={person.onsitevirtual === "onsite" } /> <span>Onsite (Training Centre)</span> <input type="radio" name="virtualorsite" value="virtual" onChange={handleChange} checked={ person.onsitevirtual === "virtual" }/> <span>Virtual (Zoom)</span> </label>
                <label>Are you located in Jos? <input type="radio" name="josornot" value="liveinjos" onChange={handleChange} checked={person.josornot === "liveinjos" }/> <span>Yes</span> <input type="radio" name="josornot" value="liveoutsidejos" onChange={handleChange} checked={person.josornot === "liveoutsidejos" }/> <span>No</span> </label>
                <label>Do you own a laptop? <input type="radio" name="laptopornot" value="havelaptop" onChange={handleChange} checked={ person.laptopornot === "havelaptop" }/> <span>Yes</span> <input type="radio" name="laptopornot" value="donthavelaptop" onChange={handleChange} checked={ person.laptopornot === "donthavelaptop" } /> <span>No</span> </label>
                <label>What is your ICT/Tech background level? <input type="radio" name="techlevel" value="beginner" onChange={handleChange} checked={ person.techlevel === "beginner" } /> <span>Beginner</span> <input type="radio" name="techlevel" value="intermediate" onChange={handleChange} checked={ person.techlevel === "intermediate" }/><span>Intemediate</span> <input type="radio" name="techlevel" value="advance" onChange={handleChange} checked={ person.techlevel === "advance" }/> <span>Advance</span> </label>
                <Link to={`/enrol/parentguardianinfo`}>Go back to Previous</Link>
                <Link to={`/enrol/preview`}>Preview</Link>
            </fieldset>
        </section>
    </Fragment>);
}

const Preview = () => {
    const [person ] = useContext(enrolContext);

        function paystack(e){
            e.preventDefault();

            try{
                var result =  firebase.firestore().collection("Enrol").doc(person.email).set({
                    address: person.address,
                    city: person.city,
                    course: person.course,
                    dob: person.dob,
                    education: person.education,
                    email: person.email,
                    firstname: person.firstName,
                    gender: person.gender,
                    ictlevel: person.techlevel,
                    injos: person.josornot === "liveinjos"? true : false,
                    lastname: person.lastName,
                    ownlaptop: person.laptopornot === "havelaptop"? true : false,
                    pgaddress: person.pgaddress,
                    pgemail: person.pgemail,
                    pgfirstname: person.pgfirstname,
                    pglastname: person.pglastname,
                    pgoccupation: person.pgoccupation,
                    pgphone: person.pgphone,
                    phone: person.phone,
                    preferclass: person.onsitevirtual,
                    state: person.state,
                    timestamp: firebase.firestore.Timestamp.fromDate(new Date())
                });
                
                result.then(docRef =>{
                document.querySelector(".status").innerHTML = `<p id="success">Document saved successfully...</p>`;
               if(window.confirm("Submitted! \n Do You want to proceed to make payment now?"))
                window.location.href = `https://paystack.com/pay/acd4p70uzk`; 
            })}
            
            catch(err){
                result.catch(error => {
                document.querySelector(".status").innerHTML  = `<p id="failure">Ops! Error Occur while adding document</p>`;
            })
            }}
            
           
        return (
        <section className="cform-content">
            <div className="status"></div>
            <button onClick={()=> window.print()}>Print</button>
            <img src="/src/assets/img/logo.png" alt="cstemp-logo" className="img"/>
            <h4 className="headline">C-STEMP INNOVATION HUB JOS</h4>
            <h3 class="subheadline">Enrolment Form</h3>
            <ul>
                <li><b>Course:</b> {person.course}</li>
                <li><b>First Name:</b> {person.firstName}</li>
                <li><b>Last Name:</b> {person.lastName}</li>
                <li><b>Date of Birth:</b> {person.dob}</li>
                <li><b>Gender:</b> {person.gender}</li>
                <hr />
                <li><b>Phone Number:</b> {person.phone}</li>
                <li><b>Email Address:</b> {person.email}</li>
                <li><b>Residential Address:</b> {person.address}</li>
                <li><b>Current City:</b> {person.city}</li>
                <li><b>State:</b> {person.state}</li>
                <hr />
                <li><b>Highest Education Qualification:</b> {person.education}</li>
                <hr />
                <li><b>Parent/Guardian First Name:</b> {person.pgfirstname}</li>
                <li><b>Parent/Guardian Last Name:</b> {person.pglastname}</li>
                <li><b>Parent/Guardian Phone Number:</b> {person.pgphone}</li>
                <li><b>Parent/Guardian Email Address:</b> {person.pgemail}</li>
                <li><b>Parent/Guardian Residential Address:</b> {person.pgaddress}</li>
                <li><b>Parent/Guardian Occupation:</b> {person.pgoccupation}</li>
                <hr />
                <li><b>How do you intend to attend training?</b> {person.onsitevirtual}</li>
                <li><b>Are you currently living in Jos?</b> {person.josornot === "liveinjos" ? "Yes" : "No"}</li>
                <li><b>Do you own a laptop?</b> {person.laptoporno === "havelaptop" ? "Yes" : "No"}</li>
                <li><b>What is your ICT/Tech background level?</b>  {person.techlevel === "beginner" ? "Beginner" : person.techlevel === "intermediate" ? "Intermediate" : "Advance"}</li>
            </ul>

            <p>{new Date().toUTCString()}</p>
            <Link to={`/enrol/otherinfo`}>Go back to Previous</Link>
            <button onClick={paystack}>Submit and Proceed to make Payment</button>
        </section>
        );
};



export default function Form(){
        const { path } = useRouteMatch();
        const [person, setPerson] = useState(()=> new Object());

        function update(obj){
            setPerson(prevPerson =>{
                return {...prevPerson, ...obj}
            })
        }
        return (
            <div className="form-page">
                <section className="form-content">
                  
                 <form>
                     <enrolContext.Provider value={[person, update]}>
                        <CourseInfo />
                    </enrolContext.Provider>
                 </form>
                
            </section>
 
                <Switch>
                <enrolContext.Provider value={[person, update]}>
                    <Route  exact path={`${path}/personalinfo`}><PersonalInfo /></Route>
                    <Route  path={`${path}/contactinfo`}><ContactInfo /></Route>
                    <Route  path={`${path}/educationinfo`}><EducationInfo /></Route>
                    <Route  path={`${path}/parentguardianinfo`}><ParentGuadianInfo /></Route>
                    <Route  path={`${path}/otherinfo`}><OtherInfo /></Route>
                    <Route  path={`${path}/preview`}><Preview /></Route>
                </enrolContext.Provider>
                </Switch>
        </div>
            
        )
    };


