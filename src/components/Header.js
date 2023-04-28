import {Col,Navbar,Container} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Notice from './Notice'
import SearchBar from './SearchBar';
import UserImage from './UserImage';
import { Link } from 'react-router-dom';
import brand_image from '../assets/images/exchange.png'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
function Header(props) {
    const [guest, setGuest] = useState(true)
    const [guestName, setGuestName] = useState('Guest')
    const [popup, setPopup] = useState(false)

    function togglePopup() {
        setPopup(!popup);
    }
    function fetchUserHandler() {
        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/userinfo.php`, { withCredentials: true }).then(function (response) {
            console.log(response)
            if (response.status === 401) {
                setGuest(true)
            }
            if (response.status === 200) {
                setGuest(false)
                setGuestName(response.data.username)
            }
        })
    }

    useEffect(() => {
        fetchUserHandler()
    }, [])
    console.log(guest)
    return (
            <Navbar   className="header" variant="light"  expand="lg">
            <Container  fluid className="header">
                <Col md={2}>
                    <Container variant="dark" className='mt-4 mb-3'>
                        <Link to="/">
                            <Navbar.Brand><img
                                alt=""
                                src={brand_image}
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                        </Link>
                    </Container>
                </Col>
                
                <Col >
                    <Container fluid className="header d-flex flex-row-reverse mt-4 mb-3">
                        {!guest ? < Link to='/setting'><UserImage></UserImage></Link> : < Link to='/login'><h2>Welcome Guest</h2></ Link>}
                        <SearchBar setItemData={props.setItemData}></SearchBar>
                        
                        <Button type="submit" className="mt-2 me-2" style={{ width: '10%' }} onClick={togglePopup}>Notice</Button>
                        <Notice trigger={popup} setPopup={setPopup}></Notice>
                    </Container>
                </Col>
                
                
            </Container>
            </Navbar>
    )
}
export default Header
