import {Form,Col,Container,Row} from 'react-bootstrap/';
import "./Profile.css"
import UserImage from './UserImage';
import {useEffect, useState } from 'react';
import axios from "axios";
import bg_change from '../assets/images/bg_ch_icon.svg.svg'
function Profile(props){
    const [user, setUser] = useState(undefined)
    const handlerGetUser = (event) => {
        
        axios.get(process.env.REACT_APP_BASENAME+`api/userinfo.php`, {withCredentials:true}).then(function(response) {
            setUser(response.data);
            console.log(user);
        });
    }
    useEffect(()=>{
        handlerGetUser()
        },
        []
    )
    if(user === undefined){
        return null;
    }
    return (

        <Container  className='window'>
            <Row>
            <Col  className="profileedit_header_upper" >
                <Row>
                    <Col>
                        <UserImage >
                        </UserImage>
                    </Col>
                </Row>
            </Col>
            </Row>
            <Row>
                <Container fluid className="profileedit_header_lower d-flex justify-content-center">
                        <Form className='from_layout mt-3 mb-3'>
                            <Row>
                            <Form.Group className="d-flex mt-5" controlId="formUserName">
                                        <Form.Label className='profileedit_txt'> User Name:</Form.Label> 
                                        <div className='profileedit_txt' >{user.username}</div>
                                </Form.Group>
                            </Row>
                                
                            <Row>
                            <Form.Group  className='d-flex mt-3'controlId="formEmail">
                                    <Form.Label className='profileedit_txt'> Email:</Form.Label>
                                    <div className='profileedit_txt' >{user.email}</div>
                            </Form.Group>
                            </Row>
                            <Row>
                            <Form.Group className="d-flex mt-3 mb-5" controlId="formPhoneNumer">
                                    <Form.Label className='profileedit_txt'> Phone Number:</Form.Label>
                                    <div className='profileedit_txt' >{user.phone_number}</div>
                            </Form.Group>
                            </Row>
                        </Form>
                </Container>
                
            </Row>
        </Container>
    )
}
export default Profile