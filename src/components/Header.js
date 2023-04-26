import {Col,Navbar,Container} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import UserImage from './UserImage';
import { Link } from 'react-router-dom';
import brand_image from '../assets/images/exchange.png'
import { useState } from 'react';
import axios from 'axios';
import "./Header.css";
import { useEffect } from 'react';
import  favorites_icon from  '../assets/images/item_defual_like.svg'
import  favorites_icon_in from '../assets/images/item_liked.svg'
function Header(props) {
    const [guest, setGuest] = useState(true)
    const [guestName, setGuestName] = useState('Guest')

    function fetchUserHandler() {
        axios.get(process.env.REACT_APP_BASENAME+`api/userinfo.php`, { withCredentials: true }).then(function (response) {
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
    let a = window.location.pathname.split('/')
    let is_in_favorite = false;
    if (a[a.length-1] == 'favorites'){
        is_in_favorite = true;
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
                        {!guest ?
                                <Link to='/favorites'> 
                                    <img className='favorites_icon_svg' src={is_in_favorite? favorites_icon_in:favorites_icon}></img>
                                </Link>
                            : 
                            null}
                    </Container>
                </Col>
            </Container>
            </Navbar>
    )
}
export default Header
