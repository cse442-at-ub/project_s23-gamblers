import './Login.css'
import { Link } from 'react-router-dom'
function Login(props) {
    return (
        <div className='frame12'>
            <div className='loginPage'>
                {/* <img className='image0' src={require('../image/image0.png')} alt="icon" /> */}
            </div>
            <div className='formBlock'>
                <h1 className='login'>Login</h1>
                <form className='form'>
                    <div className='usernameL'>
                        <label name='username' className='blue'>Username</label>
                        <Link to='/Forgot' className='forgotL'>Forgot Username</Link>
                    </div>
                    <div>
                        <input type='text' id='Username' className='input' />
                    </div>
                    <div className='passwordL'>
                        <label name='Password' className='blue'>Password</label>
                        <Link to='/Forgot' className='forgotL'>Forgot Password</Link>
                    </div>
                    <div>
                        <input type='text' id='opening-text' className='input' />
                    </div>
                    <button className='LoginButton'>Login</button>
                    <div>
                        <Link to='/Register'>
                            <button className='RegisterButton'>Register</button>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )

}
export default Login