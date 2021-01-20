import React from 'react';
import ImageSlider from './imageSlider';
import { galleryData } from './gallery-data';


function gallery(){
    return(
        <div className ="gallery">
            <main className="gallery-container">
                <ImageSlider slides={galleryData} />
            </main>
        </div>
    )
}

export default gallery;