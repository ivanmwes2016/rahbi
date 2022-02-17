import React, { Component } from 'react'
import './section_one.css'
import Icon1 from '../../images/First-Class-Customer-Service-PNG.png'
import Icon2 from '../../images/Highly-Experienced-PNG.png'
import Icon3 from "../../images/UK-Wide-Coverage-PNG.png";
import Icon4 from "../../images/Tailored-to-Your-Needs-PNG.png"
import CardData from './data'
import InfoData from '../info_content/data'
import InfoValues from '../info_content/ValuesData'
import InfoContent from '../info_content/info_content'
import Info_Values from '../info_content/info_values'
import Footer from '../footer/footer'




class SectionOne extends Component{

    state = {
        mouseover: false
    }

    handleMouseOver(){
        this.setState({
            mouseover:!this.state.mouseover
        })
    }

    render(){
        return (
            <div className='SectionOne'>
                <div className="SectionOne_Image_Container">
                    <div className='icon-container'>
                        <img src={Icon1} className='Image-Icons' />
                        <p>First Class Customer Service</p>
                    </div>
    
                    <div className='icon-container'>
                        <img src={Icon2} className='Image-Icons' />
                        <p>Highly Experienced Staff</p>
                    </div>
    
                    <div className='icon-container'>
                        <img src={Icon3} className='Image-Icons' />
                        <p>UK Wide Coverage</p>
                    </div>
    
                    <div className='icon-container'>
                        <img src={Icon4} className='Image-Icons' />
                        <p>Tailor made to your needs</p>
                    </div>
    
                </div>
    
                <div className='SectionOne_Info_Container'>
                    <div className="ServiceText">
                        <h1>We pride in the timely and quality services we provide.</h1>
                        <p>Hiring our qualified security guard services means timely security to you, your possessions, and your property.</p>
                    </div>
    
                    <div className='Info_Card_Wrapper' onMouseOver={this.handleMouseOver}>
    
                        {CardData.map((item, index) => {
                            return (
    
                                <div className={this.state.mouseover ? "Card-Holder" : " Card-Holder active"} key={index} >
                                    <div className="Card-Icon"><img src={item.ImageUrl}></img></div>
                                    <div className="Card-Name">{item.name}</div>
                                    <div className="LinkName"> <a>{item.LinkName} <span><i class="bi bi-arrow-right-circle-fill"></i></span></a></div>
                                </div>
    
    
    
                            )
    
                        })}
    
                    </div>


    
                </div>

            

                <div className="content-wrapper">
                    <InfoContent {...InfoData} />
                </div>

                <div className="content-wrapper-white">
                <Info_Values {...InfoValues} />
                </div>

                <Footer />
            </div>
        )

    }
}
    

export default SectionOne