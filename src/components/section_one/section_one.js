import React from 'react'
import './section_one.css'
import Icon1 from '../../images/First-Class-Customer-Service-PNG.png'
import Icon2 from '../../images/Highly-Experienced-PNG.png'
import Icon3 from "../../images/UK-Wide-Coverage-PNG.png";
import Icon4 from "../../images/Tailored-to-Your-Needs-PNG.png"


function SectionOne(){
    return(
        <div className ='SectionOne'> 
            <div className="SectionOne_Image_Container">
                <div className='icon-container'>
                    <img src={Icon1} className='Image-Icons'/>
                    <p>First Class Customer Service</p>
                </div>

                <div className='icon-container'>
                    <img src={Icon2} className='Image-Icons'/>
                    <p>Highly Experienced Staff</p>
                </div>

                <div className='icon-container'>
                <img src={Icon3} className='Image-Icons'/>
                <p>UK Wide Coverage</p>
            </div>

            <div className='icon-container'>
                <img src={Icon4} className='Image-Icons'/>
                <p>Tailor made to your needs</p>
            </div>

            </div>

        </div>
    )
}

export default SectionOne