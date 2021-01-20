import React from 'react';
import Header from './components/header/index';
import Footer from './components/footer/index';


function layout(props){
    return (
            <>
            <Header />
                { props.component }
            <Footer />
            </>
    )
}

export default layout;