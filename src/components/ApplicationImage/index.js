import './index.css';
const ApplicationImage = ({ imgSrc, title, onClickDownload }) => {
    return (
        <div className="application-image">
            <div >
                <img className='img-div' src={imgSrc} alt={title} />
            </div>
            <div className='middle'>
                <p>
                    {title}
                </p>
                <button className="download-btn" onClick={(e) => onClickDownload()}>Download Now</button>
            </div>
        </div>
    )
}

export default ApplicationImage