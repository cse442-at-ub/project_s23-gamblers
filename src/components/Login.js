import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import {Form,Col,Container,Row} from 'react-bootstrap/';
import { useState } from 'react'
import axios from 'axios'
function Login() {

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        axios.post(process.env.REACT_APP_BASENAME+`api/login/`,{
            username: userName,
            password: password,
        },{withCredentials:true}).then(function(response){
            console.log(response)
            if(userName==='admin'){
                if (response.data === 'success'){
                    window.alert('Welcom ADMIN')
                    navigate('/admin')
                    return
                }
            }
            if (response.data ==='success'){
                window.alert('login success, click ok')
                navigate('/')
                setUsername('')
                setPassword('')
            }
            else{
                window.alert('username or password incorrect')
            }
        })
    }

    function registerHandler(){
        navigate('/register')
    }

    function guestHandler() {
        navigate('/')
    }
    

    return (
        <div className='frame12'>
            <Container fluid className='loginPage'>
                {/* <img className='image0' src={require('../image/image0.png')} alt="icon" /> */}
            </Container>
            <Container className='formBlock'>
                <Row className='mt-3'>
                    <h1 className='login'>Login</h1>
                </Row>
                <Row>
                    <form  onSubmit={submitHandler}>
                            <Row className='usernameL'>
                            <label name='username' className='blue'>Username</label>
                            </Row>
                        <Row className=''>
                            <input type='text' id='Username' className='login_input_input' value={userName} onChange={usernameHandler} />
                        </Row>
                        <Row className='passwordL'>
                            <label name='Password' className='blue'>Password</label>
                        </Row>
                        <Row className=''>
                            <input type='password' id='opening-text' className='login_input_input' value={password} onChange={passwordHandler} />
                        </Row>
                        <Row className='jack_form'>
                            <button className='LoginButton' type='submit'>Login</button>
                            <button className='RegisterButton' onClick={registerHandler}>Register</button>
                            <button className='RegisterButton' onClick={guestHandler}>Guest Pass</button>
                        </Row>

                    </form>
                </Row>
            </Container>
        </div>
    )

}
export default Login