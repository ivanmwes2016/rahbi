import React from 'react'
import Navigation from '../navigation/Navigation'
import './courasel.css'
import CarrImage from '../../images/security_img.png'
import {data} from './data'

const courasel = () => {

    return(
        <div className="courasel">
             <Navigation />
             <div className="info-container">
                
                {data.map((item, index) => {
                    return(
                        <div className="info-wrapper" key={index}>
                            <div className={item.cName}>{item.bigtexts}</div>
                            <div className="carr-btn"><button className="quotebutton"> <a href='contact'>Make a Consultation</a></button></div>
                        </div>
                    )

                })}
                
                
                <div><img src={CarrImage} className="CarrImage"></img></div>
             </div>
        </div>
              
    )
}

export default courasel