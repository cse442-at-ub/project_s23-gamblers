import './Setting.css'
import {Form,Col,Container,Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import img1 from '../image/icon/unnamed.jpg'
import bg_change from '../assets/images/bg_ch_icon.svg.svg'
import Profile from './Profile';
import EditWindow from './EditWindow'
import axios from 'axios'
import Buying from './Buying';
import UserImage from './UserImage';
import PostForm from './PostForm'
import MyPost from './MyPost';
function Setting(){
    const navigate = useNavigate()

    const [uid, setUid] = useState("")
    const [nav_case,setNav_case] = useState(1)

    const [guest, setGuest] = useState(true)
    const [guestName, setGuestName] = useState('Guest')
    const [click_bg_ch, setClick_bg_ch] = useState(false)
    const [bgUpload,setBgUpload] = useState()

    // TODO: dummy data, need actual data from server
    const [bg, setBg] = useState('')
    let a = document.getElementsByClassName('Profile')
    
    function fetchUserHandler() {
        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/userinfo.php`,{ withCredentials: true }).then(function (response) {
            console.log(response.data)
            if (response.status === 401) {

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
    function image_file_check(file_type,size){
        let acceptable = ['jpg','jpeg','png']
        if(!acceptable.includes(file_type)){
            alert("Wrong image type, try jpg or png")
            return false
        }
        if( size > 2000000){
            alert("Too large, try image small than 2mb")
            return false
        }
        return true
    }



    function renderSwitch(param) {
        
        nav_color()
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
            case 4:
                return(
                    <Container className='mt-3'>
                        <PostForm></PostForm>
                    </Container>
                )
            case 5:
                return(
                    <Container className='mt-3'>
                        <MyPost></MyPost>
                    </Container>
                )
            default:
                return (<div>

                    </div>);
        }
    }


    function nav_color(e){
        a = document.getElementsByClassName('Profile')
        if(a.length === 0){
            return
        }
        for (let i = 0; i < a.length; i++) {
            a[i].style.background = 'white'
        }
        a[nav_case-1].style.background = 'grey'
    }

    function logoutHandler() {
        axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/logout', { withCredentials: true }).then(function (response) {
            console.log(response)
            if (response.status === 200) {
                window.alert('logout successful')
                navigate('/')
            }
        })

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
                        <Row>
                            <button className='Profile' id="ch_bar" onClick={(e) =>{setNav_case(1)}}>
                                <span className='ProfileFont' >Profile</span>
                            </button>   
                        </Row>
                        <Row>
                            <button type='button' className='Profile' id="ch_bar" onClick={(e) =>{setNav_case(2)}} >
                                <span className='ProfileFont'>Edit User Profile</span>
                            </button>
                        </Row>
                        <Row>
                            <button type='button' className='Profile' id="ch_bar" onClick={(e) =>{setNav_case(3)}} >
                                <span className='ProfileFont'>View History</span>
                            </button>
                        </Row>
                        <Row>
                            <button type='button' className='Profile' id="ch_bar" onClick={(e) =>{setNav_case(4)}} >
                                <span className='ProfileFont'>Upload</span>
                            </button>
                        </Row>
                        <Row>
                            <button type='button' className='Profile' id="ch_bar" onClick={(e) =>{setNav_case(5)}} >
                                <span className='ProfileFont'>My items</span>
                            </button>
                        </Row>
                        <Row className='mt-3'>
                            <button onClick={logoutHandler} className='Profile'>

                                <span className='ProfileFont'>Log Out</span>

                            </button>
                        </Row>
                        
                    </Col>
                    <Col md={{ span: 7}}>
                        <Container className='mt-3 Icon' style={{ 
                                backgroundImage: `url(${"https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/"+bg})`,
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
                                                        if(bgUpload === undefined){
                                                            alert("please select image");
                                                            return;
                                                        }
                                                        let type = bgUpload.name.split(".").at(-1)
                                                        let size = bgUpload.size
                                                        console.log(type)
                                                        console.log(size)
                                                        if(!image_file_check(type,size)){
                                                            return
                                                        }
                                                        fd.append('bg',bgUpload)
                                                        const cfg = {
                                                            withCredentials:true,
                                                            headers: {
                                                                'content-type': 'multipart/form-data',
                                                            },
                                                        };
                                                            axios.post("https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/update_bg_img.php",fd,cfg)
                                                        .then(res=>{
                                                            alert("success");
                                                            console.log(res.data)
                                                        })
                                                    }}>
                                                        <label>
                                                            <input type="file" name="bg_images" id="images" onChange={(e)=>{setBgUpload(e.target.files[0])}}/>
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
                </Container>
                

                
                
        </div>
    )
}

export default Setting