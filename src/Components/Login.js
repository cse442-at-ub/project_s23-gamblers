import './Login.css'
import { Link } from 'react-router-dom'
function Login(props) {
    return (
        <div className='frame12'>
            <div className='loginPage'>
                {/* <img className='image0' src={require('../image/image0.png')} alt="icon" /> */}
            </div>
            <div className='login'>
                <h1>Login</h1>
                <form>
                    <div className='username'>
                        <label name='username'>Username</label>
                        <Link to='/Forgot' className='forgot'>Forgot Username</Link>
                    </div>
                    <div>
                        <input type='text' id='Username' className='input'/>
                    </div>
                    <div className='password'>
                        <label name='Password'>Password</label>
                        <Link to='/Forgot' className='forgot'>Forgot Password</Link>
                    </div>
                    <div>
                        <input type='text' id='opening-text' className='input' />
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )

}
export default Login