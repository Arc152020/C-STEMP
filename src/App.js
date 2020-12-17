/********* CSTEMP INNOVATION HUB JOS *****************
 * Developed by: Marcus Dashe
 * Email: marcus.simon@cstemp.org
 * Date: 15122020
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/home/index';
import Layout from './routes/layout/index';
import About from './routes/about/index';
import Course from './routes/course/index';
import Gallery from './routes/gallery/index';
import Contact from './routes/contact/index'



function App(){
    return (
        <div>
            <Switch>
                    <Route exact path='/'><Layout component={ <Home /> }/></Route>
                    <Route path='/about'><Layout component={ <About /> } /></Route>
                    <Route path='/course'><Layout component={ <Course /> } /></Route>
                    <Route path='/gallery'><Layout component={ <Gallery /> } /></Route>
                    <Route path='/contact'><Layout component={ <Contact /> } /></Route>
            </Switch>
            
        </div>
    )
}

export default App;