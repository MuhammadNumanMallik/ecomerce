import React, { useRef } from 'react'
import {Button,Card,Form}from 'react-bootstrap';
import './login.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Login() {

  const email=useRef();
  const password=useRef();

  const userLogin=()=>{

    axios.post('http://localhost:3000/admin/login', {
        email: email.current.value,
        password: password.current.value
      })
      .then(function (response) {
        if (response.data.sucess === true) {
         console.log(response.data);

        }
          console.log(response.data);
        
       
      })
      .catch(function (error) {
        console.log('bad');
      });

  }
  return (
    <div className='cards'>

    <Card style={{ width: '18rem' }}>
    <Card.Body>

    <Card.Title className="text-center">Login</Card.Title>
    <Form>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={email} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={password} type="password" placeholder="************" />
      </Form.Group>
    </Form>
    <p>Not have an accout <Link to={'/register'} replace>Register</Link></p> 
      <Button onClick={userLogin} variant="primary">Login</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Login