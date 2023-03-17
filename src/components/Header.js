import './Header.css'
import {Col,Navbar,Container,Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import UserImage from './UserImage';
function Header() {
    return (
            <Navbar   className="header" variant="light"  expand="lg">
            <Container  fluid className="header">
                <Col md={2}>
                    <Container variant="dark" className='mt-4 mb-3'>
                        <Navbar.Brand href="/"><img
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
                        <a href='/Setting'>
                            <UserImage></UserImage> 
                        </a>  
                        <SearchBar></SearchBar>
                    </Container>
                </Col>
                
                
            </Container>
            </Navbar>
    )
}
export default Header
