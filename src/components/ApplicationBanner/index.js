
import Banner from '../../images/first-page-gif.gif';
import Circle from '../../images/Circle.svg';
import ApplicationMovingArrow from '../ApplicationMovingArrow';
import './index.css';
const ApplicationBanner = ({
    onClickPlanVisit
}) => {

    

    return (
        <div className="relative w-auto">
            <div className="flex flex-col md:flex-row mb-8">
                <div className="w-full md:w-3/5 p-4 pl-0 pr-0 flex-col padding-top-header flex ">
                    <p className="headline"> Welcome to the Health Hub</p>
                    <p className="mt-2 sub-headline flex">Lets #BridgeTheGap <ApplicationMovingArrow /></p>
                </div>
                <div className="w-full md:w-2/5 p-4 pr-0 pl-0">
                    <img className="w-full App-logo object-cover md:h-full " src={Circle} alt="Modern building architecture" />
                </div>
            </div>
            <div className="relative">
                <img src={Banner} className='h-32 rounded-3xl w-full object-cover banner-img ' alt='Banner' />
                <p className='banner-text' onClick={(e) => onClickPlanVisit()}>Plan Your Visit <ApplicationMovingArrow /></p>
            </div>
        </div>
    )
}

export default ApplicationBanner;