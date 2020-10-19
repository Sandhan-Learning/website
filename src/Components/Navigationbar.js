import React from 'react'
import {Nav,Navbar,NavDropdown,Button} from "react-bootstrap" 
import {withRouter} from 'react-router-dom'

function Navigationbar(props) {
    var clickContact=(e)=>{
        e.preventDefault();
        props.history.push('/contact')
    }
    return (
        <div>
        <Navbar   variant="dark" className="Navbar" collapseOnSelect expand="md">
        <Navbar.Brand className="LogoB" href="/"><img className="Logo" src='./logo.png' alt="Sandhan"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <div className="RightNav">
        <Nav >
        <Nav.Link className="NavText" style={{color: 'white', textDecoration: 'none'}} href="/Aboutus">Features</Nav.Link>
        <NavDropdown style={{textAlign:"center"}} title={
        <span className="NavText" style={{color: 'white', textDecoration: 'none'}}>Courses</span>
        } id="collasible-nav-dropdown">
        <NavDropdown.Item style={{backgroundColor: 'white',textAlign: "center"}} href="/">Students</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item style={{backgroundColor: 'white',textAlign: "center"}} href="/">Institute</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item style={{backgroundColor: 'white',textAlign: "center"}} href="/">Corporate</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link className="NavText" style={{color: 'white', textDecoration: 'none'}} href="/">Work with Us</Nav.Link>
        <Button onClick={e=>clickContact(e)} style={{margin:"0px 20px"}} variant="outline-warning">Contact</Button>
        </Nav>
        </div>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default withRouter(Navigationbar)
