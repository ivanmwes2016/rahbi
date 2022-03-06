
import React, { useState } from 'react'
import './contactComponent.css'
import FooterData from '../footer/footer_data'
import Footer from '../footer/footer'


function ContactComponent() {

    const [showResults, setshowResults] = useState(false)

    const HandleSubmit = async (e) => {
        e.preventDefault()


        const { name, email, subject, message } = e.target.elements;

        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }
        // console.log(details)


        let response = await fetch("https://rahbi.herokuapp.com", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            },
            body: JSON.stringify(details)
        })
        let result = await response.json()
        console.log(result)
        if (result.status === 'success') {
            setshowResults(true)
            // alert(status)
        } else if (result.status === 'fail') {
            setshowResults(false)
        }


    }

    return (
        <div className="ContactPageContainer" >
            <div className="TopSectionContact">Do you have any quesions for us?</div>
            <div className="MiddleSectionContact">
                <div className="leftContact">
                    <h1>GET IN TOUCH</h1>
                    <h3>Hello! We are looking forward to work with you.</h3>
                    <div>
                        {FooterData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <ul className="contact-ul">
                                        <li>{item.title}</li>
                                        <li>{item.telephone}</li>
                                        <li>{item.email}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>


                </div>



                <div className="rightContact">

                    <form className="contactForm" onSubmit={HandleSubmit}>
                        <input type="text" id="name" placeholder="Your Full Name" maxLength="50" required />
                        <input type="email" id="email" placeholder="What is your email address?" required />
                        <input type="text" id="subject" placeholder="What is your question Regarding" maxLength="50" required />
                        <textarea id="message" placeholder="Your Question" required />
                        <input id="btn_contact" type="submit" value="Submit" />
                        <div className="Result">{showResults ? "Email Sent" : null}</div>
                    </form>



                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactComponent
