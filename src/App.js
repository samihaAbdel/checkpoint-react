import React from 'react';
import './App.css';
import { Nav, NavDropdown, Navbar, Button, Container, Form, Carousel, Card } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      {/* partie nav */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Do You Travel</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Destinations</Nav.Link>
              <Nav.Link href="#action2">Travel Tips</Nav.Link>
              <NavDropdown title="Planning" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Travel Dates</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Research and Book Accommodation
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Arrange Travel Insurance
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                About us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* partie carousel */}
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="photo"
            src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1705436538/pexels-photo-1851481_vc6gzu.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Choose your destination</h5>
            <p>Enjoy the journey as much as the destination</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="photo"
            src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1705436536/pexels-photo-386009_xwl7ip.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Travel with us</h5>
            <p>Travel takes us out of our comfort zones and inspires us to see, taste and try new things</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="photo"
            src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1705436535/pexels-photo-356808_phitlz.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Enjoy your life</h5>
            <p>
              In life, it's not where you go. It's who you travel with
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* partie card */}
      <div className='carte'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1705593654/customer-retention-or-client-protection-vector-30519943_xdoqnq.jpg" />
          <Card.Body>
            <Card.Title>Customer</Card.Title>
            <Card.Text>
              Track your activities!
            </Card.Text>
            <Button variant="primary">Click me</Button>
          </Card.Body>
        </Card >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1705589722/1000_F_217956536_UfKkPxaqhSztUXgZhhVc60lgExAtl6l5_timgn6.jpg" />
          <Card.Body>
            <Card.Title>Recommendation</Card.Title>
            <Card.Text>
              Your opinion counts!
            </Card.Text>
            <Button variant="primary">Click me</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1705589723/1000_F_300536833_5umNuZK9uPZzEOOzHAEO4imVZu5AD3T9_fmmkwf.jpg" />
          <Card.Body>
            <Card.Title>Share</Card.Title>
            <Card.Text>
              Share your experience with us!
            </Card.Text>
            <Button variant="primary">Click me</Button>
          </Card.Body>
        </Card>
      </div>
      {/* partie FORM*/}
      <div className='formu'>
        <Form>
          <Form.Group className="Form" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="Form" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="Form" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div >
  );
}

export default App;
