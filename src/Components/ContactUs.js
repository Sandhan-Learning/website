import React,{useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import Navigationbar from "./Navigationbar"

function ContactUs(props) {
    const [Email, setEmail] = useState('')
    const [Phone_No, setPhone_No] = useState('')
    const [Query, setQuery] = useState('')
    const handlesubmit = (event) => {
                     
    }
    return (
        <div>
        <div >
       <Navigationbar />
       </div>
       <div>
       <Container>
       <Form onSubmit={event => handlesubmit(event)}>
           <Form.Group>
               <Form.Label>Enter Your Email</Form.Label>
               <Form.Control
                value={Email} onChange={event => setEmail(event.target.value)}
               placeholder="Email" type='text'
               required />
           </Form.Group>
           <Form.Group>
               <Form.Label>Enter Your Mobile Number</Form.Label>
               <Form.Control
                value={Phone_No} onChange={event => setPhone_No(event.target.value)}
               placeholder="Phone_No" type='text'
               required />
           </Form.Group>
           <Form.Group>
               <Form.Label>Tell us your Query</Form.Label>
               <Form.Control  required value={Query} onChange={event => setQuery(event.target.value)} as="textarea" placeholder="Write here....." rows='9'></Form.Control>
           </Form.Group>
           <Button variant="warning" type="submit">POST</Button>
       </Form>
       </Container>
       </div>
       </div>
    )
}

export default withRouter(ContactUs)
