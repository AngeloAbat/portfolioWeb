import './Navi.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NaviBar(){

    const styles = {
        background: 'linear-gradient(to right, #d40845 90%, #6F2232 200%)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: 'transparent'
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{position: "fixed", width: '100%', height: '60px'}}>
                <Container>
                <Navbar.Brand style={styles}>Angelo Abat</Navbar.Brand>
                    <Nav className="me-2">
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='navi-BottomStyle'></div>
        </div>
      );
}