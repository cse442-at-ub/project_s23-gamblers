import {Col,Navbar,Container,Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemInfo.css"
import "./UserImage.css"
import SearchBar from './SearchBar';
import UserImage from './UserImage';
import axios from "axios";
import { useState , useEffect} from 'react';
function ItemInfo(props){
    const [item, setItem] = useState([]);
    const [itid, setItid] = useState(undefined);
    useEffect(() => {
        handleLookItem();
    },[])
    const handleLookItem = () =>{
        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/item/${props.itid}`, "").then(function(response) {
            console.log(props.itid);
            // console.log(response.data);
            setItem(response.data);
            console.log(item);
        });
    }
    const handleItemChange = (event) =>{
        setItid(event.target.value);
        console.log(itid);
       
    }
    return (
        
        <div>
    <Navbar   className="header" variant="light"  expand="lg">
        <Container  fluid className="header">
            <Col md={2}>
                <Container variant="dark" className='mt-4 mb-3'>
                    <Navbar.Brand href="#home"><img
                        alt=""
                        src="https://picsum.photos/100/100"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        />
                    </Navbar.Brand> 
                </Container>
            </Col>
            <Col >
                <Container fluid className="header d-flex flex-row-reverse mt-4 mb-3">
                    <a href='#profile'>
                        <UserImage></UserImage> 
                    </a>  
                    <SearchBar></SearchBar>
                </Container>
            </Col>
            
            
        </Container>
    </Navbar>
    <input onChange={handleItemChange}/>
    <button onClick={handleLookItem}>find item</button>
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
                    <span id="item_name">{item.name}</span>
                    </h1>
                </Row>
                <Row>
                <Row><hr></hr></Row>
                </Row>
                <Row>
                    <h2 className='text'>
                        <span  id="item_description">{item.description}</span>
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
                            <span  className='text' id="item_price_number">{item.price}</span>
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
                            <span  id="item_seller">{item.contact}</span>
                        </h2>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
        </div>
    )
}
export default ItemInfo