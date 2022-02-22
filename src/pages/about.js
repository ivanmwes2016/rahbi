import React, { Component } from 'react'
import Data from '../components/about-us/data'
import '../components/about-us/about.css'
import MiddleSection from '../components/about-us/middle_section'
import TopSection from '../components/about-us/top_section'
import MiddleSectionV2 from '../components/about-us/middleSectionV2'
import MiddleSectionV3 from '../components/about-us/middleSectionV3'
import Footer from '../components/footer/footer'



export default class about extends Component {

    render() {

        return (
            <div className="about">
                <TopSection  {...Data}/>
                <MiddleSection {...Data} />
                <MiddleSectionV2 {...Data}/>
                <MiddleSectionV3 {...Data}/>
                <Footer />

            </div>
        )
    }
}
