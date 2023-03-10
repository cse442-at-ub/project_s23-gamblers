import './Register.css'
import UserAgreement from './UserAgreement'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register(){

    const [popup, setPopup] = useState(false)

    return (
        <div className='frame12'>
            <div className='loginPage'>
                {/* <img className='image0' src={require('../image/image0.png')} alt="icon" /> */}
            </div>
            <div className='login'>
                <h1>Register</h1>
                <form>
                    <div className='username'>
                        <label name='username'>Username</label>
                    </div>
                    <div>
                        <input type='text' id='Username' className='input' />
                    </div>
                    <div className='password'>
                        <label name='Password'>Password</label>
                    </div>
                    <div>
                        <input type='text' id='password' className='input' />
                    </div>
                    <div className='Cpassword'>
                        <label name='ConfirmPassword'>Confirm password</label>
                    </div>
                    <div>
                        <input type='text' id='password' className='input' />
                    </div>
                    <div className='email'>
                        <label name='email'>Email</label>
                    </div>
                    <div>
                        <input type='text' id='email' className='input' />
                    </div>
                    <div className='phone'>
                        <label name='phoneNumber'>Phone number</label>
                    </div>
                    <div>
                        <input type='text' id='phone' className='input' />
                    </div>
                     <br></br>
                    <div>
                        <input type='checkbox'/>
                        <span onClick={()=>setPopup(true)} className='div'>UserAgreement</span>
                        {console.log(popup)}
                        <UserAgreement trigger={popup} setPopup={setPopup}></UserAgreement>
                    </div>
                    <Link to='/Verify'> 
                        <button type='submit' className='RegisterButton'>Register</button>
                    </Link>
                    
                </form>
                <br></br>
                <Link to='/Login'>Already have an acoount? Click to Login!</Link>
            </div>
        </div>
    )
}
export default Register