import './Setting.css'
import {Form,Col,Container,Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogOut from './LogOut'
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import img1 from '../image/icon/unnamed.jpg'
import bg_change from '../assets/images/bg_ch_icon.svg.svg'
import Profile from './Profile';
import EditWindow from './EditWindow'
import axios from 'axios'
import Buying from './Buying';
import UserImage from './UserImage';

function Setting(){
    
    const [buttonPopup, setButtonPopup] = useState(false);
    const [uid, setUid] = useState("")
    const [nav_case,setNav_case] = useState(0)

    const [guest, setGuest] = useState(true)
    const [guestName, setGuestName] = useState('Guest')
    const [click_bg_ch, setClick_bg_ch] = useState(false)
    const [bgUpload,setBgUpload] = useState()

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




    function renderSwitch(param) {
        switch(param) {
            case 0:
                return (<div>
                    OP0
                </div>);
            case 1:
                return (
                    <Container>
                        <Row className='mt-3'>
                            <Col>
                                <UserImage></UserImage>

                            </Col>
                            <Col>
                                <Profile></Profile>
                            </Col>
                        </Row>
                    </Container>
                    );
            case 2:
                return (
                    <Container className='mt-3'>
                        <EditWindow></EditWindow>
                    </Container>
                );
            case 3:
                return(
                    <Container className='mt-3'>
                        <Buying></Buying>
                    </Container>
                )
            default:
                return (<div>

                    </div>);
        }
    }

    return(
        <div className='Background'>
            <Container className='Mainpage'>
            <Container  className='mt-3 '>
                <Row className='mt-3 mb-3 '>
                    <Col className='setting_left' md={{ span: 4}} >
                        <Row>
                        <Link to="/">

                        <button type='button' className='Back' >
                        <span className='BackFont'>Back</span>
                        </button>
                        </Link>

                        </Row>
                        <Row className='mt-3'>
                            <button className='Myaccount' onClick={() =>{setNav_case(0)}}>
                                <span className='MyaccountFont'>My account</span>
                            </button>
                        </Row>
                        <Row>
                            <button className='Profile' onClick={() =>{setNav_case(1)}}>
                                <span className='ProfileFont'>Profile</span>
                            </button>   
                        </Row>
                        <Row>
                            <button type='button' className='Profile' onClick={() =>{setNav_case(2)}} >
                                <span className='ProfileFont'>Edit User Profile</span>
                            </button>
                        </Row>
                        <Row>
                            <button type='button' className='Profile' onClick={() =>{setNav_case(3)}} >
                                <span className='ProfileFont'>View History</span>
                            </button>
                        </Row>
                        <Row className='mt-3'>
                            <button onClick={()=>setButtonPopup(true)} className='Profile'>

                                <span className='ProfileFont'>Log Out</span>

                            </button>
                        </Row>
                        
                    </Col>
                    <Col md={{ span: 7}}>
                        <Container className='mt-3 Icon' style={{ 
                            backgroundImage: `url(${"https://localhost/"+bg})`,
                            }}>
                                    <Row>
                                        <Col className='mt-5 mb-3' >
                                        </Col>
                                        <Col>
                                        </Col>
                                        <Col className='mt-3 '>
                                            <Row>
                                                <Col ></Col>
                                                <Col></Col>
                                                <Col >
                                                    <img className='bg_change_icon' src={bg_change} onClick={()=>{setClick_bg_ch(!click_bg_ch)}}/>
                                                    {click_bg_ch ? 
                                                    <div className="form-group">
                                                    <form onSubmit={(e)=>{
                                                        e.preventDefault();
                                                        const fd = new FormData()
                                                        fd.append('bg',bgUpload)
                                                        console.log(fd)
                                                        const cfg = {
                                                            withCredentials:true,
                                                            headers: {
                                                                'content-type': 'multipart/form-data',
                                                            },
                                                        };
                                                        axios.post("https://localhost/api/update_bg_img.php",fd,cfg)
                                                        .then(res=>{
                                                            console.log(res.data)
                                                        })
                                                    }}>
                                                        <label>
                                                            <input type="file" name="bg_images" id="images" onChange={(e)=>{setBgUpload(e.target.files[0]); console.log("image changed",bgUpload)}}/>
                                                            <div className="file-dummy UsernameFont" ><span> select your background image</span>
                                                            
                                                            </div>
                                                            <button className="post_button"> Upload Post</button>
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
                            {renderSwitch(nav_case)}
                            
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
                   
                </Container>
                <LogOut trigger={buttonPopup} setTrigger={setButtonPopup}>
                        </LogOut>

                
                
        </div>
    )
}

export default Setting