import './index.css';
const ApplicationImageWithHeading = ({
    imgSrc,
    title
}) =>{
    return (
        <div className="application-image-with-heading mb-5">
            <div className='img-container'>
                <img className='img-div object-cover' src={imgSrc} alt={title} />
                <p className='mt-3'>{title}</p>
            </div>
            
        </div>
    )
}

export default ApplicationImageWithHeading;