import './Register.css'
import UserAgreement from './UserAgreement'
import { useState } from 'react'
import {Form,Col,Container,Row} from 'react-bootstrap/';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

    const [popup, setPopup] = useState(false)
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('')
    const [check, setCheck] = useState(false)
    const navigate = useNavigate()

    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const passwordHandler = (event) => {
        setEnteredPassword(event.target.value)
    }
    const cPasswordHandler = (event) => {
        setConfirmPassword(event.target.value)
    }
    const emailHandler = (event) => {
        setEnteredEmail(event.target.value)
    }
    const phoneHandler = (event) => {
        setEnteredPhoneNumber(event.target.value)
    }
    const checkHandler = () => {
        setCheck(!check)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (!check) {
            window.alert('You must agree our user agreement')
        } else if (enteredPassword !== confirmPassword) {
            window.alert('Two password doesnt match')
        } else if (enteredUsername === '') {
            window.alert('Please enter username')
        }
        else if (enteredPassword === '') {
            window.alert('Please enter password')
        }
        else if (enteredEmail === '') {
            window.alert('Please enter email')
        }
        else if (enteredPhoneNumber === '') {
            window.alert('Please enter phone number')
        } else {
            axios.post(process.env.REACT_APP_BASENAME+'api/register/', {
                username: enteredUsername,
                password: enteredPassword,
                email: enteredEmail,
                phone: enteredPhoneNumber,
            }).then(function (response) {
                if (response.status === 200) {
                    setEnteredUsername('')
                    setEnteredPassword('')
                    setEnteredEmail('')
                    setEnteredPhoneNumber('')
                    setConfirmPassword('')
                    setCheck(false)
                    navigate(`/verify`)
                }
                
            }).catch(function(error){
                window.alert('The username has been taken')
            })

        }

    }



    return (
        <div className='frame12'>
            <Container fluid className='loginPage'>
                {/* <img className='image0' src={require('../image/image0.png')} alt="icon" /> */}
            </Container>
            <Container className='formBlock'>
                <Row className='mt-3'>
                <h1 className='login'>Register</h1>
                </Row>
                <Row>
                    <div >
                        <Row className='usernameL' >
                            <label name='username' className='blue'>Username</label>
                        </Row>
                        <Row>
                            <input type='text' id='Username' className='login_input_input' value={enteredUsername} onChange={usernameHandler} />
                        </Row>
                        <Row className='usernameL'>
                            <label name='Password' className='blue'>Password</label>
                        </Row>
                        <Row>
                            <input type='password' id='password' className='login_input_input' value={enteredPassword} onChange={passwordHandler} />
                        </Row>
                        <Row className='usernameL'>
                            <label name='ConfirmPassword' className='blue'>Confirm password</label>
                        </Row>
                        <Row>
                            <input id='password' className='login_input_input' type='password' value={confirmPassword} onChange={cPasswordHandler} />
                        </Row>
                        <Row className='usernameL'>
                            <label name='email' className='blue'>Email</label>
                        </Row>
                        <Row>
                            <input type='text' id='email' className='login_input_input' value={enteredEmail} onChange={emailHandler} />
                        </Row>
                        <Row className='usernameL'>
                            <label name='phoneNumber' className='blue'>Phone number</label>
                        </Row>
                        <Row>
                            <input type='text' id='phone' className='login_input_input' value={enteredPhoneNumber} onChange={phoneHandler} />
                        </Row>
                        <Row className='mt-3'>
                            <Col>
                                <input type='checkbox' value={check} onChange={checkHandler} />
                                <button className='zzzf' onClick={() => setPopup(true)}>
                                <span  className=''>UserAgreement</span>
                                </button>
                            </Col>
                            
                            <UserAgreement trigger={popup} setPopup={setPopup}></UserAgreement>
                        </Row>
                        <Row>
                            <button type='submit' onClick={submitHandler} className='usernameL RegisterButton'>
                                Register
                            </button>
                        </Row>
                        <Row>
                            <span className='zzzy usernameL'>
                                <Link  to='/Login'>Already have an acoount? Click to Login!</Link>
                            </span>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Register