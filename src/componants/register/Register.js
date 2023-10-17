import {React,useRef,useState} from 'react'
import {Button,Card,Form}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [alertData, setAlertData] = useState(null);
    const name=useRef('');
    const mobile=useRef('');
    const email=useRef('');
    const password=useRef('');

    const RegisterUser=()=>{

      axios.post('http://localhost:3000/admin/register', {
        name: name.current.value,
        mobile: mobile.current.value,
        email: email.current.value,
        password: password.current.value
      })
      .then(function (response) {
        if (response.data.sucess === "sucess") {
          console.log(response.data);

        }else{
          console.log(response.data);
        }
       
      })
      .catch(function (error) {
        console.log(error);
      });

  
    }
  return (
   

  <div className='cards'>
    <Card style={{ width: '18rem' }}>
    <Card.Body>

    <Card.Title className="text-center">Register</Card.Title>
    <Form>
    <Form.Group className="mb-1" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" ref={name} placeholder="Roomi" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="mobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" ref={mobile} placeholder="03247528449" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={email} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={password} placeholder="************" />
      </Form.Group>
    </Form>
    <p>Have an accout?<Link to={'/login'} replace>Login</Link></p> 
      <Button onClick={RegisterUser} variant="primary">Register</Button>
    </Card.Body>
  </Card>
    </div>
   
  ) 
}

export default Register