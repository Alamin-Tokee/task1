import React, {useState} from "react";
import { Navbar,Nav,Row,Col,Container, Button, Card, Tab, Tabs} from 'react-bootstrap';
import { FaTelegramPlane } from 'react-icons/fa';


const Home = () => {

    const [key, setKey] = useState('home');

    return (
        <>
            <Row style={{marginLeft:"40px"}}>
                <Col style={{textAlign:"left", fontSize:"25px", fontWeight:"bold"}}>LOGO</Col>
                <Col style={{textAlign:"right", marginRight:"40px"}}>
                <Button style={{background:"none", border:'none', color:"green", fontWeight:"bold"}}>BN</Button>
                <span>/</span>
                <Button style={{background:"none", border:'none', color:"black", fontWeight:"bold"}}>EN</Button>
                </Col>
            </Row>
            <Navbar collapseOnSelect expand="md" bg="" variant="" style={{marginLeft:"43px"}}>
                {/* <Container> */}
                    {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">HOME</Nav.Link>
                            <Nav.Link href="#pricing" style={{marginLeft:"30px"}}>ADVERTISE</Nav.Link>
                            <Nav.Link href="#features" style={{marginLeft:"30px"}}>PUBLISHERS</Nav.Link>
                            <Nav.Link href="#pricing" style={{marginLeft:"30px"}}>INFLUENCERS</Nav.Link>
                            <Nav.Link href="#pricing" style={{marginLeft:"30px"}}>ADFORMATS</Nav.Link>
                            <Nav.Link href="#features" style={{marginLeft:"30px"}}>BLOG</Nav.Link>
                            <Nav.Link href="#pricing" style={{marginLeft:"30px"}}>CONTACT US</Nav.Link>

                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav style={{marginRight:"40px", background:"white", borderRadius:"20px", width:"150px", textAlign:"center"}}>
                                <Nav.Link href="#deets" style={{background:"#FF6F00"}}>LOGIN</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes"> SIGN UP</Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>

             

            <Row style={{height:"500px"}}>
                <Col style={{margin:"50px", textAlign:"left"}}>
                    <h3>Here will be a Title</h3>
                    <br></br>
                    <p>Here will be a text</p>
                </Col>

                <Col style={{margin:"50px ", background: "white"}}></Col>
            </Row>

            <div style={{width:"100%", display:"flex"}}>
                <div style={{width:"40%", height:"1px", borderTop: "1px dotted #e3d9d9", marginTop:"12px"}}></div>
                <div style={{width:"20%", fontSize:"20px", color:"#644f9C"}}>AVAIABLE FOR THE WORK</div>
                <div style={{width:"40%", height:"1px", borderTop: "1px dotted #e3d9d9", marginTop:"12px"}}></div>
            </div>
            <br></br>
            <p>Here will be text</p>

            <Row style={{height:"400px", padding:"0px", paddingTop:"0px !important"}}>
                <Col>
                    <Card border="" style={{background: "#F2F2F2", border:"none"}}>
                            <Card.Body style={{margin:"0%"}}>
                                {/* <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text> */}
                            <div style={{width:"150px", height:"150px" , borderRadius:"50%" , backgroundColor:"white", border:"1px solid #f2f2f2",  marginLeft:"122px"}}>
                                <FaTelegramPlane style={{width:"80px", height:"80px", marginTop: "30px"}} />
                            </div>
                            <br></br>
                            <Card.Title>Text 1</Card.Title>
                            <br></br>
                            <button style={{width:"180px", height:"30px", borderRadius: "15px", border:"none", background:"#644f9C", color:"white"}}>Hello1</button>
                            </Card.Body>
                    </Card>
                </Col>
                   
                <Col>
                <Card border="" style={{background: "#F2F2F2", border:"none"}}>
                            <Card.Body >
                                {/* <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text> */}
                            <div style={{width:"150px", height:"150px" , borderRadius:"50%" , backgroundColor:"white", border:"1px solid #f2f2f2", marginLeft:"122px"}}>
                                <FaTelegramPlane style={{width:"80px", height:"80px", marginTop: "30px"}} />
                            </div>
                            <br></br>
                            <Card.Title>Text 1</Card.Title>
                            <br></br>
                            <button style={{width:"180px", height:"30px", borderRadius: "15px", border:"none", background:"#644f9C", color:"white"}}>Hello2</button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card border="" style={{background: "#F2F2F2", border:"none"}}>
                            <Card.Body style={{margin:"0%"}}>
                                {/* <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text> */}
                            <div style={{width:"150px", height:"150px" , borderRadius:"50%" , backgroundColor:"white", border:"1px solid #f2f2f2",  marginLeft:"122px"}}>
                                <FaTelegramPlane style={{width:"80px", height:"80px", marginTop: "30px"}} />
                            </div>
                            <br></br>
                            <Card.Title>Text 1</Card.Title>
                            <br></br>
                            <button style={{width:"180px", height:"30px", borderRadius: "15px", border:"none", background:"#644f9C", color:"white"}}>Hello3</button>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>


            <div style={{width:"100%", display:"flex"}}>
                <div style={{width:"40%", height:"1px", borderTop: "1px dotted #e3d9d9", marginTop:"12px"}}></div>
                <div style={{width:"20%", fontSize:"20px", color:"#644f9C"}}>VERSATILE ADD FORMAT</div>
                <div style={{width:"40%", height:"1px", borderTop: "1px dotted #e3d9d9", marginTop:"12px"}}></div>
            </div>

            <br></br>

            <div className="tabSection">
                
                <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      style={{textAlign:"center"}}
    >
      <Tab eventKey="home" title="Home">
          <Row style={{margin:"50px"}}>
              <Col style={{height:"215px", background: "#644f9C", margin: "80px"}}>
                    <h3>Hello Bangladesh</h3>
              </Col>
              <Col style={{textAlign:"left", marginTop: "80px"}}>
                    <h3>POP UNDER</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p><br></br>
                    <p>Learn More</p>
              </Col>
          </Row>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <Row style={{margin:"50px"}}>
              <Col style={{height:"215px", background: "#644f9C", margin: "80px"}}>
                    <h3>Hello Bangladesh</h3>
              </Col>
              <Col style={{textAlign:"left", marginTop: "80px"}}>
                    <h3>POP UNDER</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p><br></br>
                    <p>Learn More</p>
              </Col>
          </Row>
      </Tab>
      <Tab eventKey="contact" title="Contact">
      <Row style={{margin:"50px"}}>
              <Col style={{height:"215px", background: "#644f9C", margin: "80px"}}>
                    <h3>Hello Bangladesh</h3>
              </Col>
              <Col style={{textAlign:"left", marginTop: "80px"}}>
                    <h3>POP UNDER</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p><br></br>
                    <p>Learn More</p>
              </Col>
          </Row>
      </Tab>

      <Tab eventKey="contact" title="Contact">
            <Row style={{margin:"50px", background: "blue"}}>
              <Col>
                    <h3>Hello Bangladesh</h3>
              </Col>
              <Col style={{textAlign:"left"}}>
                    <h3>POP UNDER</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              </Col>
          </Row>
      </Tab>
    </Tabs>
            </div>

            <div>
                <Row style={{height:"400px", background:"#644f9C" , margin:"50px"}}>
                    <h3>Title</h3>
                    <Col >
                    <div style={{marginLeft:"50px", border:"1px dotted white", borderRadius: "50%", height:"200px", width:"200px"}}>
                        Hello 
                    </div>
                    </Col>
                    <Col>
                    <div style={{marginLeft:"50px", background:"white", borderRadius: "50%", height:"200px", width:"200px"}}>
                        Hello 
                    </div>
                    </Col>
                    <Col>
                    <div style={{marginLeft:"50px", background:"#FF6F00", borderRadius: "50%", height:"200px", width:"200px"}}>
                        Hello 
                    </div>
                    </Col>
                </Row>
            </div>




            
            {/* <h1>hello</h1> */}
        </>
    )
}


export default Home;