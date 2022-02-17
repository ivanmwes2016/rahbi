import React from 'react'
import './info_content.css'

const Hello = () =>{
    alert("Hello")
}

const InfoContent = ({title, data, imageURL, link}) => {

    return(
        <div className='content_container'>
            <div className="LeftHandContent">
            {title} <p>{data}</p>
            <button className="quotebutton-dark" onClick={Hello}>More Information<span> <i class="bi bi-arrow-right-circle-fill"></i></span> </button>
            </div>
            
            <div className="RightHandContent"><img src={imageURL}/></div>

        </div>

    )

}

export default InfoContent