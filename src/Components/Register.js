import './Register.css'
import UserAgreement from './UserAgreement'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register(){

    const [popup, setPopup] = useState(false)
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('')

    const usernameHandler = (event) =>{
        setEnteredUsername(event.target.value)
    }
    const passwordHandler = (event) =>{
        setEnteredPassword(event.target.value)
    }
    const emailHandler = (event) => {
        setEnteredEmail(event.target.value)
    }
    const phoneHandler = (event) => {
        setEnteredPhoneNumber(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault()


        axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/register/',{
            username: enteredUsername,
            password: enteredPassword,
            email: enteredEmail,
            phone: enteredPhoneNumber,
        })
        setEnteredUsername('')
        setEnteredPassword('')
        setEnteredEmail('')
        setEnteredPhoneNumber('')
    }



    return (
        <div className='frame12'>
            <div className='loginPage'>
                {/* <img className='image0' src={require('../image/image0.png')} alt="icon" /> */}
            </div>
            <div className='login'>
                <h1>Register</h1>
                <form onSubmit={submitHandler}>
                    <div className='username'>
                        <label name='username'>Username</label>
                    </div>
                    <div>
                        <input type='text' id='Username' className='input' value={enteredUsername} onChange={usernameHandler}/>
                    </div>
                    <div className='password'>
                        <label name='Password'>Password</label>
                    </div>
                    <div>
                        <input type='password' id='password' className='input' value={enteredPassword} onChange={passwordHandler} />
                    </div>
                    <div className='Cpassword'>
                        <label name='ConfirmPassword'>Confirm password</label>
                    </div>
                    <div>
                        <input id='password' className='input' type='password' />
                    </div>
                    <div className='email'>
                        <label name='email'>Email</label>
                    </div>
                    <div>
                        <input type='text' id='email' className='input' value={enteredEmail} onChange={emailHandler} />
                    </div>
                    <div className='phone'>
                        <label name='phoneNumber'>Phone number</label>
                    </div>
                    <div>
                        <input type='text' id='phone' className='input' value={enteredPhoneNumber} onChange={phoneHandler} />
                    </div>
                     <br></br>
                    <div>
                        <input type='checkbox'/>
                        <span onClick={()=>setPopup(true)} className='div'>UserAgreement</span>
                        <UserAgreement trigger={popup} setPopup={setPopup}></UserAgreement>
                    </div>
                        <button type='submit' className='RegisterButton'>Register</button>    
                </form>
                <br></br>
                <Link to='/Login'>Already have an acoount? Click to Login!</Link>
            </div>
        </div>
    )
}
export default Register