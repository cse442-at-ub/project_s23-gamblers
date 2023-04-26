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
import right_arrow from '../assets/images/arrow-bold-right.svg'
import left_arrow from '../assets/images/arrow-bold-left.svg'
import plus_icon from '../assets/images/plus-square.svg'
import toast, { Toaster } from "react-hot-toast";
function ItemInfo(props){
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const keyValues = window.location.search
    const [state, setState] = useState()
    const [guestName, setGuestName] = useState('Guest')
    const [like , setLike] = useState(false)    
    const [totalindex, setTotalindex]= useState(0)
    const [post,setPost]=useState(false)
    const [images,setImages] = useState([])
    const [index, setIndex]=useState(0)
    const navigate = useNavigate()
    let item_id = 1;
    useEffect(() => {
        console.log(window.location.search);
        const a = window.location.search;
        const arugments = new URLSearchParams(a);
        item_id = (arugments.get('var'));
        handleLookItem();
    }, [])
    const get_items_history = () => {
        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/my_items.php`,{withCredentials: true}).then(function(response) {
            let myItem = response.data
            console.log(window.location.search);
            const a = window.location.search;
            const arugments = new URLSearchParams(a);
            item_id = (arugments.get('var'));
            for (let i=0; i<myItem.length;i++){
                if(String(item_id)===String(myItem[i].item_id)){
                    setPost(true)
            }
        }
        }).catch(function (error) {
            console.log(error.response.status) // 401
            console.log(error.response.data.error) //Please Authenticate or whatever returned from server
            if(error.response.status===401){
            }
        });
    }
    useEffect(
        ()=>{
            get_items_history()
        },
        []
    )
    const handleLookItem = () => {

        axios.get(process.env.REACT_APP_BASENAME+`api/item.php?var=${item_id}`, { withCredentials: true }).then(function (response) {
            setState(200)
            setItem(response.data);
            setLike(response.data.islike    )
            console.log(item)
            const galleryImages = []
            galleryImages.push(
            {
                'img': 'https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/uploads/'+response.data.item_image_dir
            })
            for (let i = 0; i< response.data.item_images.length;i++){
                galleryImages.push({'img':'https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/uploads/'+response.data.item_images[i]['image_name']})
            }
            setImages(galleryImages)
            setTotalindex(response.data.item_images.length)
            //TODO: no such items
        }).catch(function (error) {
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
        axios.post(process.env.REACT_APP_BASENAME+'api/nmsl', JSON.stringify({
            reporter: guestName,
            item_id: itemid
        })).then(function (response) {
            console.log(response)
        })
    }
    function change_like() {
        const a = window.location.search;
        const arugments = new URLSearchParams(a);
        let itemid = (arugments.get('var'));
        axios.post(
            process.env.REACT_APP_BASENAME+'api/likeitem', 
            JSON.stringify({
                islike: like,
                item_id: itemid
            }),
            {
                withCredentials:true
            }
            ).then(function (response) {
            console.log(response)
        })
    }
    function handleMultipleUpload(event){
        console.log(window.location.search);
        const a = window.location.search;
        const arugments = new URLSearchParams(a);
        item_id = (arugments.get('var'));
        const formData = new FormData()
        formData.append('add_image', event.target.files[0])
        console.log(formData)
        console.log(item.user_id)
        axios.post(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/item.php?var=${item_id}`, formData,{withCredentials:true})
            .then(res=>{
            if(res.status===200){
                toast.success('Successfully upload!')
                setTimeout(function(){
                    window.location.reload();
                 }, 1800);
                console.log(res.data)
            }
        })
        }
    function left(){
        if (index>=1){
            setIndex(index-1)
            console.log(index)
            console.log(totalindex)
        }
        if(index === 0){
            toast('This is the first image')
        }
    }

    function right(){
        if (index < totalindex){
            setIndex(index+1)
            console.log(index)
            console.log(totalindex)
        }
        if(index===totalindex){
            toast("This is the last image")
        }
    }



    return (
        
        <div>
            {state === 404? <FourZeroFour></FourZeroFour>:
                <div><Header></Header>
                    <Container fluid className='main-wrapper'>
                        <Row className="d-flex mt-3 mb-3">
                            <Col md={{ span: 4, offset: 2 }} className="d-flex mt-3 mb-3">
                                <Col>       
                                    <Row>
                                    <img className='arrow_svg' src={left_arrow} onClick={()=>{left()}}></img>
                                    {images[0]?
                                        <img className='item-image' src={images[index]['img']} alt='' />
                                        :
                                        null
                                    }
                                     <img className='arrow_svg' src={right_arrow} onClick={()=>{right()}}></img>
                                        <Row>
                                            <Col className='mt-3'>                     
                                                <img className='add_like_icon' src={like?liked_svg:like_defaut_svg} onClick={()=>{setLike(!like);change_like()}}></img>
                                            </Col>
                                            <Row>
                                            <Col>
                                            {post?
                                                <label>
                                                    <img className='plus_svg' src={plus_icon}></img>Add Image
                                                    <input type='file' onChange={handleMultipleUpload}></input>
                                                </label>
                                                :
                                                null}
                                            </Col>
                                            </Row>
                                        </Row>
                                    </Row>
                                    
                                </Col>
                                    
                                
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