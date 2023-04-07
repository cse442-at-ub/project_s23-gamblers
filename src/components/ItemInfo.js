import {Col,Container,Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemInfo.css"
import axios from "axios";
import {  useNavigate , Link} from 'react-router-dom'
import Header from './Header';
import { useState , useEffect} from 'react';
function ItemInfo(props){
    const [item, setItem] = useState([]);
    const [itid, setItid] = useState(undefined);
    const keyValues = window.location.search
    
    const navigate = useNavigate()
    let item_id = 1;
    useEffect(() => {
        console.log(window.location.search);
        const a = window.location.search;
        const arugments = new URLSearchParams(a);
        item_id = (arugments.get('var'));
        handleLookItem();

    },[])
    const handleLookItem = () =>{
        axios.get(`https://localhost/api/item.php?var=${item_id}`, {withCredentials:true}).then(function(response) {
            setItem(response.data);
        //TODO: no such items
        }).catch(function (error) {
            console.log(error.response.status) // 401
            console.log(error.response.data.error) //Please Authenticate or whatever returned from server
            if(error.response.status==404){
                navigate('/')
            }
    })}
    const handleItemChange = (event) =>{
        setItid(event.target.value);
        console.log(itid);
       
    }

    const [guestName, setGuestName] = useState('Guest')

    function fetchUserHandler() {
        axios.get(`https://localhost/api/userinfo.php`, { withCredentials: true }).then(function (response) {
            console.log(response.data)
            if (response.status === 401) {
            }
            if (response.status === 200) {
                setGuestName(response.data.username)
            }
        })
    }
    useEffect(() => {
        fetchUserHandler()
    }, [])

    function handleReport(){
        window.alert('A report has been sent')
        axios.post('https://localhost/api/report.php',{
            reporter: guestName,
            item_id: item.item_name
        })
    }


    return (
        
        <div>
    <Header></Header>
    <Container fluid className='main-wrapper'>
        <Row className="d-flex mt-3 mb-3">
            <Col md={{ span: 4, offset: 2}} className="d-flex mt-3 mb-3">
            <Container>
            <img
                        alt=""
                        src="https://picsum.photos/600/600"
                        className='item-image'
                            />
            </Container>
            </Col>
            <Col md={{ span: 4 ,offset:1 }}>
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
                        <span  id="item_description">{item.item_description}</span>
                    </h2>
                </Row>
                <Row>
                <Row><hr></hr></Row>
                </Row>
                <Row>
                    <Col>
                        <h2 className='text'>
                            <span  id="item_price">Price: </span>
                        </h2>
                    </Col>
                    <Col>
                        <h2 className='text'>
                            <span  className='text' id="item_price_number">{item.item_price}</span>
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
                            <span  id="item_seller">{item.item_contact}</span>
                        </h2>
                    </Col>
                    <button className='reportbutton' onClick={handleReport}>Report Post</button>
                </Row>
            </Col>
        </Row>
    </Container>
        </div>
    )
}
export default ItemInfo