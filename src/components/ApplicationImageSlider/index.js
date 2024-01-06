import React from 'react';
import Banner from '../../images/banner_img.jpg';
import Arrow from '../../images/right-arrow.png';
import Logo from '../../logo.svg';
import './index.css';

const ApplicationImageSlider = () => {
    const imageData = [
        {
            id: 1,
            title: "Banner",
            imgSrc: Banner
        },
        {
            id: 2,
            title: "Logo",
            imgSrc: Logo
        },
        {
            id: 3,
            title: "Arrow",
            imgSrc: Arrow
        },
        {
            id: 4,
            title: "Banner",
            imgSrc: Banner
        },
        {
            id: 5,
            title: "Logo",
            imgSrc: Logo
        },
        {
            id: 6,
            title: "Arrow",
            imgSrc: Arrow
        },

    ]

    return (
        <div className='application-image-slider padding-left-side'>
            <div className='application-image-slider-title'>
                <p className='second-section-heading'>Advanced tech</p>

                <div className="image-controller w-full md:w-1/4 p-4 pl-0 pr-0 justify-center flex items-end">
                    <span className="arrows-indi">&lt;</span>
                    <span className="arrows-indi">&gt;</span>
                </div>

            </div>


            <div className='img-slider-container mb-16'>

                {
                    imageData.map((data, index) => {
                        return (
                            <div className='p-1 h-max' key={index}>
                                <img className='img-slider' src={data.imgSrc} alt={data.title} />
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default ApplicationImageSlider