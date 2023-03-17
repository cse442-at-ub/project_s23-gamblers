import React from 'react'
import {Col,Navbar,Container,Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import UserImage from './UserImage';
import SearchBar from './SearchBar';
export default function Header() {
  return (
    <div>
        <Navbar   className="header" variant="light"  expand="lg">
        <Container  fluid className="header">
            <Col md={2}>
                <Container variant="dark" className='mt-4 mb-3'>
                    <Navbar.Brand href="#home"><img
                        alt=""
                        src="https://picsum.photos/100/100"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        />
                    </Navbar.Brand> 
                </Container>
            </Col>
            <Col >
                <Container fluid className="header d-flex flex-row-reverse mt-4 mb-3">
                    <a href='#profile'>
                        <UserImage></UserImage> 
                    </a>  
                    <SearchBar></SearchBar>
                </Container>
            </Col>

        </Container>
        </Navbar>
    </div>
  )
}
