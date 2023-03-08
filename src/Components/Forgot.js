import './Forgot.css'
function Forgot(){
    return(
    <div>
        <h1>Please enter your email</h1>
        <form>
                
            <input type='text' id='email' className='input' />
            <button type='submit'>Send</button>
        </form>
    </div>
    )
}
export default Forgot