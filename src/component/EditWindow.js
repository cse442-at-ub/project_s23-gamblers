import {Form,Col,Container,Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EditWindow.css"
import UserImage from './UserImage';
import PopUp from './PopUp';
import { useState } from 'react';
function EditWindow(){
    const [buttonPopup, setButtonPopup] = useState(false)
    return (
        
        <div>
            <main>
                <button className='the-pop-button' onClick={() => setButtonPopup(true)}>edit profile</button>
                
                <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <div  className='window'>
                        <Row>
                        <Col className="edit_header_upper" >
                            <UserImage ></UserImage>
                        </Col>
                        </Row>
                        <Row>
                            <Container fluid className="edit_header_lower d-flex justify-content-center">
                                    <Form className='from_layout mt-3 mb-3'>
                                        <Form.Group className="d-flex mt-5" controlId="formUserName">
                                            <Col md={{span : 2}}>
                                                <Form.Label className='edit_txt'> User Name </Form.Label> 
                                            </Col>
                                            <Col  className="d-flex flex-row-reverse">
                                                <Form.Control className='edit_input' type="txt" placeholder="Enter username" />
                                            </Col>
                                        </Form.Group>
                                            
                                        <Form.Group  className='d-flex mt-3'controlId="formEmail">
                                            <Col md={{span : 2}}>
                                                <Form.Label className='edit_txt'> Email </Form.Label>
                                            </Col>
                                            <Col  className="d-flex flex-row-reverse">
                                                <Form.Control className='edit_input' type="email" placeholder="Enter Email" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group className="d-flex mt-3 mb-5" controlId="formPhoneNumer">
                                            <Col md={{span : 2}}>
                                                <Form.Label className='edit_txt'> Phone Number </Form.Label>
                                            </Col>
                                            <Col className="d-flex flex-row-reverse">
                                                <Form.Control className='edit_input' type="txt" placeholder="Enter Phone Number" />
                                            </Col>
                                        </Form.Group>
                                        <div className="d-flex justify-content-around">
                                        <button className='mt-5 mb-5 cancel_bot' onClick={() => setButtonPopup(false)}>
                                        Close
                                        </button>
                                        <button className='mt-5 mb-5 save_bot'  type="submit">
                                        Save
                                        </button>
                                        </div>
                                    </Form>
                            </Container>
                            
                        </Row>
                    </div>
                    
                </PopUp>
            </main>
        </div>
        
    )
}
export default EditWindow