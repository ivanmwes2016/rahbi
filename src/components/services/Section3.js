const SectionThree = ({S3title, ScatchPhrase, S3body}) => {
    return(
        <div className="ServiceSection3"> 
            <div className='leftThree'><p className="pBody">{S3body}</p></div>
            <div className='rightThree'><p className="pTitle">{S3title}</p></div>
        </div>
    )
}


export default SectionThree