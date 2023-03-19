import {Col,Container,Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemInfo.css"
import axios from "axios";
import Header from './Header';
import { useState , useEffect} from 'react';
function ItemInfo(props){
    const [item, setItem] = useState([]);
    const [itid, setItid] = useState(undefined);
    
    useEffect(() => {
        handleLookItem();

    },[])

    const handleLookItem = () =>{
        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/item/1`, "").then(function(response) {
            setItem(response.data);
        });
    }
    const handleItemChange = (event) =>{
        setItid(event.target.value);
        console.log(itid);
       
    }
    return (
        
        <div>
    <Header></Header>
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