import './Setting.css'
import {Form,Col,Container,Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogOut from './LogOut'
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import img1 from '../image/icon/unnamed.jpg'
import bg_change from '../assets/images/another-change-4.png'
import PopUp from "./PopUp"
import EditWindow from './EditWindow'
import axios from 'axios'


function Setting(){
    
    const [buttonPopup, setButtonPopup] = useState(false);
    const [uid, setUid] = useState("")


    const [guest, setGuest] = useState(true)
    const [guestName, setGuestName] = useState('Guest')
    const [click_bg_ch, setClick_bg_ch] = useState(false)
    // TODO: dummy data, need actual data from server
    const [bg, setBg] = useState('')
    function fetchUserHandler() {
        axios.get(`https://localhost/api/userinfo.php`,{ withCredentials: true }).then(function (response) {
            console.log(response.data)
            if (response.status === 401) {
                setGuest(true)
            }
            if (response.status === 200) {
                console.log(response.data)
                setGuest(false)
                setBg(response.data.bg_image)
                setGuestName(response.data.username)
            }
        })
    }
    useEffect(() => {
        fetchUserHandler()
    }, [])




   
    return(
        <div className='Background'>
            <div className='Mainpage'>
            <Container  className='mt-3 '>
                <Row className='mt-3 mb-3 '>
                    <Col className='setting_left' md={{ span: 4}} >
                        <Link to='/' >
                            <button type='button' className='Profile' >
                                <span className='ProfileFont'>Back</span>
                            </button>
                        </Link>
                        <Row className='mt-3'>
                            <Link to='/profile' >
                            <button className='Myaccount'>
                                <span className='MyaccountFont'>My account</span>
                            </button>
                            </Link>
                        </Row>
                        <Row>
                            <Link to='/profile' >
                            <button className='Profile'>
                                <span className='ProfileFont'>Profile</span>
                            </button>   
                            </Link>
                        </Row>
                        <Row>
                            <Link>
                            <button type='button' className='Profile'>
                                <span className='ProfileFont'>Edit User Profile</span>
                            </button>
                            </Link>
                        </Row>
                        <Row className='mt-3'>
                            <Link>
                            <button onClick={()=>setButtonPopup(true)} className='Profile'>
                                <span className='ProfileFont'>Log Out</span>
                            </button>
                            </Link>
                        </Row>
                        
                    </Col>
                    <Col md={{ span: 7}}>
                        <Container className='mt-3 Icon' style={{ 
                            backgroundImage: `url(${"https://localhost/"+bg})`,
                            }}>
                                    <Row>
                                        <Col className='mt-5 mb-3' >
                                            <Row>
                                                <Col >
                                                    <img className='img1' src={img1} alt='icon' />
                                                </Col>
                                                <Col >
                                                    <span className='UsernameFont'>{guestName}</span>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className='mt-3 '>
                                            <Row>
                                                <Col ></Col>
                                                <Col></Col>
                                                <Col >
                                                    <img className='bg_change_icon' src={bg_change} onClick={()=>{setClick_bg_ch(!click_bg_ch)}}/>
                                                    {click_bg_ch ? 
                                                    <div className="form-group">
                                                    <form >
                                                        <label>
                                                            <input type="file" name="images" id="images" />
                                                            <div className="file-dummy UsernameFont"><span> select your background image</span>
                                                            
                                                            </div>
                                                        </label>           
                                                    </form>
                                                    </div>
                                                : null}
                                                </Col>                                                
                                            </Row>
                                            
                                        </Col>
                                    </Row>
                        
                        </Container>
                        <Container className='setting_roll'>
                            
                            
                        </Container>
                    </Col>
                </Row>
                

            </Container>
            
                
                    
                    {/* <div className='cardposition'>
                        <button className="card">
                            <a href='\iteminfo' >
                            <img className='img2' src={img1} alt=""/>
                            <div className="container">
                                <h4><b>Item Name</b></h4> 
                            </div>
                            </a> 
                        </button> 
                    </div> */}
                
                    {/* <a href='/profile' >
                        
                        
                    </a> */}
                   
                </div>
                <LogOut trigger={buttonPopup} setTrigger={setButtonPopup}>
                        </LogOut>

                
                
        </div>
    )
}

export default Setting