import React from 'react'
import './info_content.css'



const InfoContent = ({title, data, imageURL, link}) => {

    return(
        <div className='content_container'>
            <div className="LeftHandContent">
            {title} <p>{data}</p>
            <button className="quotebutton-dark"><a className="a-ref" href="/about-us">More Information<span> <i class="bi bi-arrow-right-circle-fill"></i></span></a> </button>
            </div>
            
            <div className="RightHandContent"><img src={imageURL}/></div>

        </div>

    )

}

export default InfoContent