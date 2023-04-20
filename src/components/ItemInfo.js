import { Col, Container, Row } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemInfo.css"
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'
import Header from './Header';
import { useState , useEffect} from 'react';
import FourZeroFour from './FourZeroFour';
import Comment from './Comment';
import like_defaut_svg from '../assets/images/item_defual_like.svg'
import liked_svg from '../assets/images/item_liked.svg'
function ItemInfo(props){
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const keyValues = window.location.search
    const [state, setState] = useState()
    const [guestName, setGuestName] = useState('Guest')
    const [like , setLike] = useState(false)    
    let item_id = 1;
    useEffect(() => {
        console.log(window.location.search);
        const a = window.location.search;
        const arugments = new URLSearchParams(a);
        item_id = (arugments.get('var'));
        handleLookItem();

    }, [])
    const handleLookItem = () => {

        axios.get(process.env.REACT_APP_BASENAME+`api/item.php?var=${item_id}`, { withCredentials: true }).then(function (response) {
            console.log(response.data)
            console.log(item.item_id)
            setState(200)
            setItem(response.data);
            //TODO: no such items
        }).catch(function (error) {
            console.log(error.response.status) // 401
            console.log(error.response.data.error) //Please Authenticate or whatever returned from server
            if (error.response.status == 404) {
                setState(404)
            }
        })
    }

    

    function fetchUserHandler() {
        axios.get(process.env.REACT_APP_BASENAME+`api/userinfo.php`, { withCredentials: true }).then(function (response) {
            console.log(response.data)
            if (response.status === 401) {
                setGuestName('guest')
            }
            if (response.status === 200) {
                setGuestName(response.data.username)
            }else{
                setGuestName('guest')
            }
        })
    }
    useEffect(() => {
        fetchUserHandler()
    }, [])

    function handleReport() {
        let itemid = 1
        window.alert('A report has been sent')
        const a = window.location.search;
        const arugments = new URLSearchParams(a);
        itemid = (arugments.get('var'));
        console.log(itemid)
        axios.post(process.env.REACT_APP_BASENAME+'api/nmsl', {
            reporter: guestName,
            item_id: itemid
        }).then(function (response) {
            console.log(response)
        })
    }




    return (

        <div>
            {state === 404? <FourZeroFour></FourZeroFour>:
                <div><Header></Header>
                    <Container fluid className='main-wrapper'>
                        <Row className="d-flex mt-3 mb-3">
                            <Col md={{ span: 4, offset: 2 }} className="d-flex mt-3 mb-3">
                                <Container>
                                    <Row>
                                        <img
                                            alt=""
                                            src={process.env.REACT_APP_BASENAME+"uploads/" + item.item_image_dir}
                                            className='item-image'
                                        />
                                    </Row>
                                    <Row>
                                        <Col className='mt-3'>
                                            <img className='add_like_icon' src={like?liked_svg:like_defaut_svg} onClick={()=>{setLike(!like)}}></img>
                                        </Col>
                                    </Row>
                                </Container>
                                
                            </Col>
                            <Col md={{ span: 4, offset: 1 }}>
                                <Row >
                                    <h1 className='text'>
                                        <span id="item_name">{item.item_name}</span>
                                    </h1>
                                </Row>
                                <Row>
                                    <Row><hr></hr></Row>
                                </Row>
                                <Row>
                                    <h2 className='text'>
                                        <span id="item_description">{item.item_description}</span>
                                    </h2>
                                </Row>
                                <Row>
                                    <Row><hr></hr></Row>
                                </Row>
                                <Row>
                                    <Col>
                                        <h2 className='text'>
                                            <span id="item_price">Price: </span>
                                        </h2>
                                    </Col>
                                    <Col>
                                        <h2 className='text'>
                                            <span className='text' id="item_price_number">{item.item_price}</span>
                                        </h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Row><hr></hr></Row>
                                </Row>
                                <Row>
                                    <Col>
                                        <h2 className='text'>
                                            <span  >Seller contact: </span>
                                        </h2>
                                    </Col>
                                    <Col>
                                        <h2 className='text'>
                                            <span id="item_seller">{item.item_contact}</span>
                                        </h2>
                                    </Col>
                                    <button className='reportbutton' onClick={handleReport}>Report Post</button>
                                </Row>
                                <Row>
                                    <Comment></Comment>
                                </Row>
                            </Col>
                        </Row>
                    </Container></div>
                    }
            
            
        </div>
        )
}
export default ItemInfo