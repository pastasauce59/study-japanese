// import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavigationBar(props) {

    const token = localStorage.getItem("token")

    const handleLogOut = () => {
        localStorage.clear()
    }

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
                            <NavDropdown.Item href="/katakana/study">Study</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/katakana/quiz">Quiz</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        { token ? 
                        <NavDropdown title="My account 👤" >
                        <NavDropdown.Item 
                            href="/account">Dashboard</NavDropdown.Item>
                        <NavDropdown.Item
                            href="/login" onClick={handleLogOut}>Log out</NavDropdown.Item>
                        </NavDropdown> 
                        : 
                        <NavDropdown title="Sign In 👤" >
                            <NavDropdown.Item 
                            href="/login">Login - Coming Soon!</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/signup">Sign Up - Coming Soon!</NavDropdown.Item>
                        </NavDropdown>
                       }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
}

export default NavigationBar;