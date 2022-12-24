import './Navi.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NaviBar(){

    const styles = {
        color: "#d40845",
        borderbottom: '0px',
        // background: 'linear-gradient(to right, #d40845 90%, #6F2232 200%)',
        // WebkitBackgroundClip: "text",
        // WebkitTextFillColor: 'transparent'
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{position: "fixed", width: '100%', height: '60px'}}>
                <Container>
                <Navbar.Brand href="/" style={styles}>
                    <h4>Angelo Abat</h4>
                </Navbar.Brand>
                    <Nav className="me-2">
                        <Nav.Link href="/AboutMe">About Me</Nav.Link>
                        <Nav.Link href="/Skills">Skills</Nav.Link>
                        <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='navi-BottomStyle'></div>
        </div>
      );
}