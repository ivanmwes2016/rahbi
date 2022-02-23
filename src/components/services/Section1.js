const SectionOne = ({Stitle, ScatchPhrase, Sbody}) => {
    return(
        <div className="ServiceSection1">
            <div className='leftOne'><p className="pBody">{Sbody}</p></div>
            <div className='rightOne'><p className="pTitle">{Stitle}</p></div>
        </div>
    )
}


export default SectionOne