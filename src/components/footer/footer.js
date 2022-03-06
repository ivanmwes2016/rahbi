
import React, { Component } from 'react'
import './footer.css'
import FooterData from './footer_data'


export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="Left-Content">
                <h4>Rahbi Security</h4>
                {FooterData.map((item, index) =>{
                    return(
                        <div>
                        <div key={index}>
                            <ul className="footerList-ul">
                                <li>{item.title}</li>
                                <li>{item.telephone}</li>
                                <li>{item.email}</li>
                            </ul>
                        </div>
                        </div>
                        
                    );
                })}
                <button className="quotebutton"><a href="https://rahbisecurity.co.uk:2096">Member Area</a></button>
                </div>


                <div className="Left-Content">
                    <h4>Connect with us</h4>
                    {FooterData.map((item, index) => {
                        return (
                            <div>
                                <div key={index}>
                                    <ul className="footerList-ul">
                                        <li><a href={item.url}>{item.socialName}</a></li>
                                    </ul>
                                </div>
                            </div>

                        );
                    })}

                </div>


                <div className="Left-Content">
                    <h4>Quick Links</h4>
                    {FooterData.map((item, index) => {
                        return (
                            <div>
                                <div key={index}>
                                    <ul className="footerList-ul">
                                        <li><a href={item.url}>{item.serviceName}</a></li>
                                    </ul>
                                </div>
                            </div>

                        );
                    })}

                </div>
               
            </div>
        )
    }
}
