
import ReactCardFlip from 'react-card-flip'
import './ServiceStyles.css'
import SectionOne from './Section1'
import SectionTwo from './Section2'
import SectionThree from './Section3'
import SectionFour from './Section4'

import Data from './data'

import React from 'react'

const ServicesComponent =() => {

    return(
        <div className="serviceContainer">
        <div className="topArea"></div>
        <div className="sectionOneContainer">
            <SectionOne  {...Data}/>
            <SectionTwo {...Data} />
            <SectionThree {...Data} />
            <SectionFour {...Data} />

        </div>

    </div>
    )

}

export default ServicesComponent


