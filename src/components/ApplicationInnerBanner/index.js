import React from 'react';
import TakeOnTour from '../TakeOnTour';

import './index.css';
import ApplicationHeader from "../ApplicationHeader";

const ApplicationInnerBanner = ({
    title,
    subTitle,
    letPlanVisist = true
}) => {
    
    return (
        <div className="relative w-auto padding-left-side ">
            <div className="padding-top-side"> <ApplicationHeader /></div>
            <div>
                <TakeOnTour />
            </div>    
        </div>
    )
}

export default ApplicationInnerBanner;