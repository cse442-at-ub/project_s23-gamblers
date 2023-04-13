import { Col, Container, Row } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemInfo.css"
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'
import Header from './Header';
import { useState , useEffect} from 'react';
import FourZeroFour from './FourZeroFour';
function ItemInfo(props){
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const keyValues = window.location.search
    const [state, setState] = useState()
    const [commentData, setCommentData] = useState([
        {id:0, user_id:0, item_id:0, comment_text: 'this item is good', time_created:'2023/4/11'},
        { id: 1, user_id: 1, item_id: 1, comment_text: 'this item is good1', time_created: '2023/4/11' },
        { id: 2, user_id: 2, item_id: 2, comment_text: 'this item is good2', time_created: '2023/4/11' },
        { id: 3, user_id: 3, item_id: 3, comment_text: 'this item is good3', time_created: '2023/4/11' },
        { id: 4, user_id: 4, item_id: 4, comment_text: 'this item is good4', time_created: '2023/4/11' },
        { id: 5, user_id: 5, item_id: 5, comment_text: 'this item is good5', time_created: '2023/4/11' },
        { id: 6, user_id: 6, item_id: 6, comment_text: 'this item is good6', time_created: '2023/4/11' },
        { id: 7, user_id: 7, item_id: 7, comment_text: 'this item is good7', time_created: '2023/4/11' },
    ])
    const [guestName, setGuestName] = useState('Guest')
    const navigate = useNavigate()
    
    let item_id = 1;
    useEffect(() => {
        console.log(window.location.search);
        const a = window.location.search;
        const arugments = new URLSearchParams(a);
        item_id = (arugments.get('var'));
        handleLookItem();

    }, [])
    const handleLookItem = () => {

        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/item.php?var=${item_id}`, { withCredentials: true }).then(function (response) {
            console.log(response.data)
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
        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/userinfo.php`, { withCredentials: true }).then(function (response) {
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
        window.alert('A report has been sent')
        console.log(item_id)
        console.log(guestName)
        axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/nmsl', {
            reporter: guestName,
            item_id: item_id
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
                                    <img
                                        alt=""
                                        src={"https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/uploads/" + item.item_image_dir}
                                        className='item-image'
                                    />
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
                            </Col>
                        </Row>
                    </Container></div>
                    }
            
            
        </div>
        )
}
export default ItemInfo