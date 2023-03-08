import './Navi.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NaviBar(){

    // function addMargin() {
    //     window.scrollTo(0, window.pageYOffset + 2000);
    // }
    
    // window.addEventListener('hashchange', addMargin());

    const styles = {
        fontSize: "calc(14px + 2vmin)",
        borderbottom: '0px',
        background: 'linear-gradient(to right, #d40845 60%, #6F2232 200%)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: 'transparent'
    }

    return (
        <div className='navDiv'>
            <Navbar bg="dark" variant="dark" style={{position: "fixed", width: '100%', height: '60px'}}>
                <Container>
                <Navbar.Brand href="/" style={styles}>Angelo Abat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="navTag-Holder me-2">
                        {/* <Anchor className='NavAnchor'> */}
                            <Nav.Link className='navTag' href="#About">About Me</Nav.Link>
                            <Nav.Link className='navTag' href="#Skills">Skills</Nav.Link>
                            <Nav.Link className='navTag' href="#Portfolio">Portfolio</Nav.Link>
                            <Nav.Link className='navTag' href="#ContactMe">Contact</Nav.Link>
                        {/* </Anchor> */}

                    </Nav>
                </Container>
            </Navbar>
            <div className='navi-BottomStyle'></div>
        </div>
      );
}