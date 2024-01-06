import React, { useEffect } from 'react';
import Logo from '../../logo.svg';
import Banner from '../../images/banner_img.jpg';
import ApplicationImageWithHeading from '../../components/ApplicationImageWithHeading';
import './index.css'
const ExploreMore = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
      }, [])
    const onClickDownload = () => {
        console.log("image download")
    }
    return (
        <div className='relative'>
            <div className='flex padding-left-side items-center second-section-heading'>
                <span>Core Clinical Competency</span>
            </div>
           
            <div className="flex flex-col md:flex-row  padding-left-side padding-right-side first-row">
                <div className="w-full md:w-1/3  first-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Doctor'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/3 second-img">
                    <ApplicationImageWithHeading imgSrc={Banner} title={'Doctor'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/3  first-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Doctor'} onClickDownload={onClickDownload} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row  padding-left-side padding-right-side first-row">
                <div className="w-full md:w-1/3  first-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Lab'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/3 second-img">
                    <ApplicationImageWithHeading imgSrc={Banner} title={'Lab'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/3  first-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Lab'} onClickDownload={onClickDownload} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row padding-left-side padding-right-side first-row">
                <div className="w-full md:w-1/3 first-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Lab'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/3 second-img first-img">
                    <ApplicationImageWithHeading imgSrc={Banner} title={'Lab'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/3 second-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Lab'} onClickDownload={onClickDownload} />
                </div>
            </div>

            <div className="flex flex-col md:flex-row padding-left-side padding-right-side first-row">
                <div className="w-full md:w-1/4 first-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Lab'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/4 second-img first-img">
                    <ApplicationImageWithHeading imgSrc={Banner} title={'Lab'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/4 second-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Lab'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/4 second-img first-img">
                    <ApplicationImageWithHeading imgSrc={Banner} title={'Lab'} onClickDownload={onClickDownload} />
                </div>
            </div>

            <div className='flex justify-center padding-left-side padding-right-side items-center mb-14'>
                <button className='book-visit-btn'>Book your visit   &rarr;</button>
            </div>

            {/* Second Section */}

            <div className='flex  padding-left-side padding-right-side items-center second-section-heading'>
                <span>Tech Aided Screenings</span>
            </div>
            <div className="flex flex-col md:flex-row padding-left-side padding-right-side first-row">
                <div className="w-full md:w-1/3 first-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Physio'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/3 second-img first-img">
                    <ApplicationImageWithHeading imgSrc={Banner} title={'Yoga'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/3 second-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Fit'} onClickDownload={onClickDownload} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row padding-left-side padding-right-side first-row">
                <div className="w-full md:w-1/3 first-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Nutrition'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/3 second-img first-img">
                    <ApplicationImageWithHeading imgSrc={Banner} title={'Yoga'} onClickDownload={onClickDownload} />
                </div>
                <div className="w-full md:w-1/3 second-img">
                    <ApplicationImageWithHeading imgSrc={Logo} title={'Psychological'} onClickDownload={onClickDownload} />
                </div>
            </div>
            
            <div className='flex justify-center padding-left-side padding-right-side items-center mb-14'>
                <button className='book-visit-btn'>Book your visit   &rarr;</button>
            </div>

        </div>
    )
}


export default ExploreMore