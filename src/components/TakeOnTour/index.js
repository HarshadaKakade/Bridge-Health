import React from 'react';
import TourGIF from '../../images/second-page-heding.gif';
import './index.css'

const TakeOnTour = () => {
    return(
        <div className='take-on-tour'>
            <p className='take-on-tour-title'>Journey at Bridge Health</p>
            <img src={TourGIF} alt='tour flow' />
        </div>
    )
       
    
}

export default TakeOnTour