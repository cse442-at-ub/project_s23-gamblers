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
                    <div>
                        <input type='checkbox'/>
                        <button onClick={()=>setPopup(true)}>UserAgreement</button>
                        {console.log(popup)}
                        <UserAgreement trigger={popup}></UserAgreement>
                    </div>
                    <button type='submit' className='RegisterButton'>Register</button>
                </form>
                <Link to='/Login'>Already have an acoount? Click to Login!</Link>
            </div>
        </div>
    )
}
export default Register