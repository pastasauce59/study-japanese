// import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavigationBar(props) {
    return (
        <div className='navbar'>
           <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Study🇯🇵Japanese!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        <NavDropdown title="Hiragana" >
                            <NavDropdown.Item href="/hiragana">Characters</NavDropdown.Item>
                            <NavDropdown.Item href="/hiragana/study">Study</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/hiragana/quiz">Quiz</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Katakana" >
                            <NavDropdown.Item href="/katakana">Characters</NavDropdown.Item>
                            <NavDropdown.Item href="/hiragana/study">Study - Coming Soon!</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/hiragana/quiz">Quiz - Coming Soon!</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Sign In 👤" >
                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
}

export default NavigationBar;