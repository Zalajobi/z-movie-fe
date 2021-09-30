import React, {useEffect, useState} from "react";
import {Button, Container, Form, Image, Nav, Navbar} from "react-bootstrap";

const Header = (props) => {
    const [navbar, setNavbar] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setNavbar(true)
            } else setNavbar(false)

        })
        return () => {
            window.removeEventListener('scroll');
        }
    },[])

    return (
        <React.Fragment>
            <header className="header" id="header" style={{background: `${navbar ? '#0B0B0B' : ''}` }}>
                <Container style={{zIndex: '5'}}>
                    <Navbar bg="transparent" expand="lg" className="w-100">
                        <Navbar.Brand href="#home" className="mr-auto">
                            <img
                                src="https://res.cloudinary.com/zalajobi/image/upload/v1632512692/Z-Movie/Common/Rectangle_smjlkp.png"
                                width="124"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Z-Movie Logo"
                            />
                            {/*Z-Movie*/}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link className="head-link" href="#home">Home</Nav.Link>
                                <Nav.Link className="head-link" href="#link">Browse Movie</Nav.Link>
                                <Nav.Link className="head-link" href="#link">Browse TV</Nav.Link>
                                <Nav.Link className="head-link" href="#link">About</Nav.Link>
                                <Nav.Link className="head-link" href="#link">Blog</Nav.Link>
                                <Nav.Link className="head-link" href="#link">Contact Us</Nav.Link>
                            </Nav>
                            <Form inline className="d-flex flex-row ml-auto">
                                <Button as="a" className="btn-trans head-link">Sign in</Button>
                                <Button as="a" className="btn-trans head-link">Sign up</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
        </React.Fragment>
    )
}

export default Header;