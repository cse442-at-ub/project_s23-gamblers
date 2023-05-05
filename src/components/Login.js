import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
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
            <div className='loginPage'>
                {/* <img className='image0' src={require('../image/image0.png')} alt="icon" /> */}
            </div>
            <div className='formBlock'>
                <br></br>
                <br></br>
                <h1 className='login'>Login</h1>
                <br></br>
                <form  onSubmit={submitHandler}>
                        <div className='usernameL'>
                        <label name='username' className='blue'>Username</label>
                        </div>
                    <div>
                        <input type='text' id='Username' className='input' value={userName} onChange={usernameHandler} />
                    </div>
                    <div className='passwordL'>
                        <label name='Password' className='blue'>Password</label>
                    </div>
                    <div>
                        <input type='password' id='opening-text' className='input' value={password} onChange={passwordHandler} />
                    </div>
                    <div className='jack_form'>
                    <button className='LoginButton' type='submit'>Login</button>
                    <button className='RegisterButton' onClick={registerHandler}>Register</button>
                    <button className='RegisterButton' onClick={guestHandler}>Guest Pass</button>
                    </div>

                </form>
            </div>
        </div>
    )

}
export default Login