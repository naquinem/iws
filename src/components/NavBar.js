import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mainlogo from '../Image/logo.png'
import fblogo from '../Image/fblogo.png'
import tweeterlogo from '../Image/tweeterlogo.png'
import instagramlogo from '../Image/instagramlogo.png'


function NavBar() {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={mainlogo} alt="companylogo" className='companylogo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">INNOVATIVE WATER SOLUTIONS INC.</Nav.Link>
            
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">
              <img src={fblogo} alt="facebook" className='facebook' />
            </Nav.Link>
            <Nav.Link href="#" disabled>
              <img src={tweeterlogo} alt="tweeter" className='tweeter' />
            </Nav.Link>
            <Nav.Link href="#action2">
              <img src={instagramlogo} alt="instagram" className='instagram' />
            </Nav.Link>
          </Nav>
            
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar;
