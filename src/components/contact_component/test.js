// import React from 'react'
// import './contactComponent.css'
// import UseFormComponent from '../../useForm'




// function ContactComponent() {

//     const sendEmail = () => {
//         let details ={
//             name:inputs.Fname,
//             email:inputs.email,
//             subject:inputs.Sname,
//             message: inputs.inquiry

//         }

//         let response = fetch('http://localhost:4001/contact-form', {
//             method:"POST",
//             headers:{
//                 'Content-Type':"application/json;charset=utf-8",
//             },
//             body:JSON.stringify(details)
//         })
        
//         let result = response.json()
//         alert(result)
        
//     }

//     const {inputs, HandleInputChange, HandleSubmit} = UseFormComponent(sendEmail);

//     return (
//         <div className="ContactPageContainer" >
//         <div className="TopSectionContact">Do you have any quesions for us?</div>
//         <div className="MiddleSectionContact">
//             <div className="leftContact">One Div</div>
//             <div className="rightContact">

//                 <form className="contactForm" onSubmit={HandleSubmit}>
//                     <input type="text" name="Fname" value= {inputs.Fname}placeholder="Your Full Name" maxLength="50" required onChange={HandleInputChange} />
//                     <input type="email" name="email" value={inputs.email} placeholder="What is your email address?"  required  onChange={HandleInputChange}/>
//                     <input type="text" name="Sname" value={inputs.Sname} placeholder="What is your question Regarding" maxLength="50" required onChange={HandleInputChange} />
//                     <textarea name="inquiry" value ={inputs.inquiry} placeholder="Your Question"  required onChange={HandleInputChange} />
//                     <input id="btn_contact"  type="submit" value="Submit"  />
//                 </form>

//             </div>
//         </div>
//     </div>
//     )
// }

// export default ContactComponent



const [email, setEmail] = useState('')
const [message, setMessage] = useState('')


const HandleSubmit = async (event) => {
    event.preventDefaul()
    console.log({email, message})
    
    const response = await fetch("/access", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({email, message})
    })

    const resData = await response.json();
    if(resData.status === 'success'){
        alert("message sent")
        this.resetForm()
    }else if (resData.status === 'fail'){
        alert("Message failed to send")
    }
}



const[mailerState, setMailerState] = useState(
    {
        name:"",
        email:"",
        subject:"",
        message:""
    }
);

const onChangeHandler = (event) => {
    event.persist()
    setMailerState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
    }))
};

const URL = "http://localhost:4000/send"

const HandleSubmit = async (event) => {
   event.preventDefault()
   console.log({mailerState})
   
    await fetch(URL, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body:JSON.stringify({mailerState})
})
    .then((res) => res.json())
    .then(async (res) => {
        const resData = await res
        console.log("This is Data: ==>>", resData)

        if(resData.status === "success"){
            alert("Message Sent")
        } else if(resData.status === 'fail'){
            alert("Message faile to send")
        }
    })
    .then(() => {
        setMailerState({
            name:"",
            email:"",
            subject:"",
            message:""
        })
    }) 
    
    
}