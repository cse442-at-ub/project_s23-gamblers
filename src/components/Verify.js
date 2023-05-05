import React from 'react'
import { Link } from 'react-router-dom'

function Verify() {
    return (
        <div className='frame12'>
            <div className='loginPage'></div>
            <h1 style={{textAlign:'center'}}>Thank you for register, please login now</h1>
            <div style={{ textAlign: 'center' }}>
               <Link to='/login'>
                <button className='RegisterButton' >Login</button>
            </Link> 
            </div>
            


        </div>
    )
}

export default Verify
