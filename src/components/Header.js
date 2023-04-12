import './Header.css'
import {Col,Navbar,Container} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import UserImage from './UserImage';
import brand_image from '../assets/images/exchange.png'
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
function Header() {

    const [guest, setGuest] = useState(true)
    const fetchUserHandler = useCallback(async () => {
        try {
            const response = await fetch('https://localhost/api/userinfo.php', {credentials: 'include'})
            console.log(response)
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            if (response.status === 401) {
                setGuest(true)
            }
            if (response.status === 200) {
                setGuest(false)
            }

        } catch (error) {
            throw new Error('Something went wrong!')
        }
    }, []);


    useEffect(() => {
        fetchUserHandler()
    }, [])

    return (
            <Navbar   className="header" variant="light"  expand="lg">
            <Container  fluid className="header">
                <Col md={2}>
                    <Container variant="dark" className='mt-4 mb-3'>
                        <Navbar.Brand href="/"><img
                            alt=""
                            src={brand_image}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            />
                        </Navbar.Brand> 
                    </Container>
                </Col>
                <Col >
                    <Container fluid className="header d-flex flex-row-reverse mt-4 mb-3">
                        {!guest?<a href='/setting'>
                            <UserImage></UserImage> 
                        </a> : <a href='/login'><h2>Welcome Guest</h2></a>}
                         
                        <SearchBar></SearchBar>
                    </Container>
                </Col>
                
                
            </Container>
            </Navbar>
    )
}
export default Header
