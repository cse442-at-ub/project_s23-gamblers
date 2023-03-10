import './Forgot.css'
function Forgot() {
    return (
        <div className='frame12'>
            <div className='loginPage'></div>
            <div className='formBlock'>
                <h1 style={{textAlign:'center'}}>Please enter your email</h1>
                <form className='form'>
                    <input type='text' id='email' className='input' />
                    <button type='submit' className='RegisterButton'>Send</button>
                </form>
            </div>
        </div>
    )
}
export default Forgot