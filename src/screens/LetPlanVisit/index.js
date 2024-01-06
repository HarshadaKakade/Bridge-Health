import React, { useEffect, useRef } from 'react';
import ExploreMore from '../ExploreMore';
import ApplicationInnerBanner from '../../components/ApplicationInnerBanner';
import ApplicationImageSlider from '../../components/ApplicationImageSlider';
import './index.css';

const LetPlanVisit = () => {
    const elementRef = useRef(null);
    
    
  
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div ref={elementRef} className='let-plan-visit'>
           

            <ApplicationInnerBanner title={"Check if you are healthy"} subTitle={"with the help our team"} />
            <ExploreMore />
            <ApplicationImageSlider />

            <div className='padding-left-side padding-right-side'>
                <iframe src="https://www.youtube.com/embed/A8x-QbbXXek" title='Intoduction video' className='video-css' controls >
                
                    
                </iframe >
            </div>
            {/* <div className='flex justify-center items-center h-20 relative'>
                <p className='explore-more-title' onClick={(e) => onClickExploreMore()}>
                    Explore More
                </p>
                <div className='explore-arrow' onClick={(e) => onClickExploreMore()}>
                    <ApplicationMovingArrow />
                </div>

            </div> */}


        </div>
    )
}

export default LetPlanVisit;