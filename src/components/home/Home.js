import React from "react";
import { Navbar,Nav,Row,Col,Container, Button, Span } from 'react-bootstrap';


const Home = () => {

    return (
        <>
            <Row>
                <Col style={{textAlign:"left", fontSize:"40px"}}>Logo</Col>
                <Col style={{textAlign:"right"}}>
                <Button style={{background:"none", border:'none', color:"green"}}>BN</Button>
                <span>/</span>
                <Button style={{background:"none", border:'none', color:"black"}}>EN</Button>
                </Col>
            </Row>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                {/* <Container> */}
                    {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes"> Dank memes </Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
            {/* <h1>hello</h1> */}
        </>
    )
}


export default Home;