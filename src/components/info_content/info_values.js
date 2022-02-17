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
            <button className="quotebutton-dark" onClick={Hello}>More Information<span> <i class="bi bi-arrow-right-circle-fill"></i></span> </button>
            </div>
            
            

        </div>

    )

}

export default Info_values