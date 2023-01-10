import './Navi.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NaviBar(){

    const styles = {
        fontSize: "calc(14px + 2vmin)",
        borderbottom: '0px',
        background: 'linear-gradient(to right, #d40845 60%, #6F2232 200%)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: 'transparent'
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{position: "fixed", width: '100%', height: '60px'}}>
                <Container>
                <Navbar.Brand href="/" style={styles}>Angelo Abat</Navbar.Brand>
                    <Nav className="navTag-Holder me-2">
                        {/* <Anchor className='NavAnchor'> */}
                            <a className='navTag' href="#About">About Me</a>
                            <a className='navTag' href="#Skills">Skills</a>
                            <a className='navTag' href="#Portfolio">Portfolio</a>
                            <a className='navTag' href="#ContactMe">Contact</a>
                        {/* </Anchor> */}

                    </Nav>
                </Container>
            </Navbar>
            <div className='navi-BottomStyle'></div>
        </div>
      );
}