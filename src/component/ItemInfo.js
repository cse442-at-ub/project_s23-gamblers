import {Col,Navbar,Container,Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemInfo.css"
import "./UserImage.css"
import SearchBar from './SearchBar';
import UserImage from './UserImage';
function ItemInfo(){
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
                    <UserImage></UserImage>   
                    <SearchBar></SearchBar>
                </Container>
            </Col>
            
            
        </Container>
    </Navbar>
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
                    <span id="item_name">ITEM_NAME</span>
                    </h1>
                </Row>
                <Row>
                <Row><hr></hr></Row>
                </Row>
                <Row>
                    <h2 className='text'>
                        <span  id="item_description">25 Light Modes: The LED desk lamp can easily switch between 5 brightness and 5 color tempers (3200K-6500K) with buttons, providing you with healthy and comfortable office lighting. Different lights meet the needs of different scenes, suitable for you and your children to read, work, study, relax,</span>
                    </h2>
                </Row>
                <Row>
                <Row><hr></hr></Row>
                </Row>
                <Row>
                    <Col>
                        <h2 className='text'>
                            <span  id="item_price">price: </span>
                        </h2>
                    </Col>
                    <Col>
                        <h2 className='text'>
                            <span  className='text' id="item_price_number">25</span>
                        </h2>
                    </Col>
                </Row>
                <Row>
                <Row><hr></hr></Row>
                </Row>
                <Row>
                    <Col>
                        <h2 className='text'>
                            <span  >SELLER CONTACT: </span>
                        </h2>
                    </Col>
                    <Col>
                        <h2 className='text'>
                            <span  id="item_seller">UB@buffalo.edu 123-456-7890</span>
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