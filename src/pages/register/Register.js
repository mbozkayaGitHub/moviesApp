import  "./Register.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";


const userInfo = {
  name: "" ,
  lastname: "",
  email: "",
  password:"",
}

const Register = () => {
  const [initialValue, setInitialValue] = useState(userInfo);
  const {name,lastname,email,password} = 
  initialValue;
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange =(e)=> {

    const {name,value}=e.target
console.log(name,":",value);
setInitialValue((previous)=>({...previous,[name]:value}))
  }
  return (
    <div className="register">
      <Form className="form">
    <Form.Group className="mb-3" >
      <Form.Label>Name</Form.Label>
      <Form.Control
      name="name"
      onChange={handleChange}
      value={name}
       type="text" placeholder="Enter name" />
      
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Lastname</Form.Label>
      <Form.Control 
       name="lastname"
       onChange={handleChange}
       value={lastname}
      type="text" placeholder="Enter Lastname" />
      
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Email address</Form.Label>
      <Form.Control
       name="email"
       onChange={handleChange}
       value={email}
      type="email" placeholder="Enter email" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control 
       name="password"
       onChange={handleChange}
       value={password}
      type="password" placeholder="Password" />
    </Form.Group>
  

  <div className="buttonRegister"><Button variant="danger" type="submit">
      Submit
    </Button></div>
    
  </Form></div>
  )
}

export default Register