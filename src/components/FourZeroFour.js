import React from 'react'
import dexter from "../assets/images/dexter_sleep.jpg"
import './FourZeroFour.css'
import {  useNavigate , Link} from 'react-router-dom'
import {Button,Container,Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FourZeroFour() {
    const navigate = useNavigate()

  return (
    <div className='main_404'>
        <Container>
        <Row>
            <img className='dexter_sleep' src={dexter}></img>

        </Row>
        <Row >
            <h1 className='font_404'>Ops! The cat ate your file again</h1>
        </Row>
        <Row>
            
            <h1 className='font_404'>
            <Link to="/">
                GO to main page
            </Link>
                </h1>
        </Row>
        </Container>
    </div>
  )
}
