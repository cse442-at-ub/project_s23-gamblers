import { Link } from 'react-router-dom'
import './Register.css'
function Register(){
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
                        <Link to='/UserAgreement'>UserAgreement</Link>
                    </div>
                    
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}
export default Register