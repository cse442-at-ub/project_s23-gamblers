import {Form,Col,Container,Row} from 'react-bootstrap/';
import "./EditWindow.css"
import UserImage from './UserImage';
import PopUp from './PopUp';
import { useState } from 'react';
function EditWindow(props){
    return (
                    <div  className='window'>
                        <Row>
                        <Col className="edit_header_upper" >
                            <UserImage >
                            </UserImage>
                            <form action="/image-upload" id="image-form" method="post" encType="multipart/form-data" className='serach_input' >
                                <input id="form-file" type="file" title=" " name="upload" hidden></input >
                                <input type="submit" value="upload" hidden></input>
                            </form>
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
                                        <button className='mt-5 mb-5 cancel_bot' onClick={() => props.onChange(false)}>
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
    )
}
export default EditWindow