import{useState} from 'react'

const UseFormComponent = (callback) => {
    const[inputs, setInputs] = useState({}) //Initiaing a state and a setter
    
    const HandleSubmit = (event) =>{
        if(event){
            event.preventDefault();
        }
        callback();
    }

    const HandleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]:event.target.value}))
        alert(inputs)

    }
    return{
        HandleSubmit,
        HandleInputChange,
        inputs
    }
}

export default UseFormComponent
