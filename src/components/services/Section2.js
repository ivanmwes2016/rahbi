const SectionTwo = ({S2title, ScatchPhrase, S2body}) => {
    return(
        <div className="ServiceSection2"> 
            <div className='rightTwo'><p className="pTitle">{S2title}</p></div>
            <div className='leftTwo'><p className="pBody">{S2body}</p></div>
        </div>
    )
}


export default SectionTwo