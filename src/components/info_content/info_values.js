import React from 'react'
import './info_content.css'

const Hello = () =>{
    alert("Hello")
}

const Info_values = ({title, data, imageURL, link}) => {

    return(
        <div className='content_container container2'>
            <div className="RightHandContent"><img src={imageURL}/></div>
            <div className="LeftHandContent">
            {title} <p>{data}</p>
            <button  className="quotebutton-dark"><a className="a-ref" href="/about-us">More Information<span> <i class="bi bi-arrow-right-circle-fill"></i></span> </a> </button>
            </div>
            
            

        </div>

    )

}

export default Info_values