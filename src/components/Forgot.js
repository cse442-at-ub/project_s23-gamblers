import { Link } from 'react-router-dom'

function Forgot() {
    return (
        <div className='frame12'>
            <div className='loginPage'></div>
            <div className='formBlock'>
                <h1 style={{textAlign:'center'}}>Please enter your email</h1>
                <form className='form'>
                    <input type='text' id='email' className='input' />
                    <Link to='/Verify'>
                        <button type='submit' className='RegisterButton'>Send</button>
                    </Link>
                    
                </form>
            </div>
        </div>
    )
}
export default Forgot