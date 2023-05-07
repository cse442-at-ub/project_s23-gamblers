import 'bootstrap/dist/css/bootstrap.min.css';
import {React} from 'react'
import {  useNavigate , Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import {Col,Container,Row} from 'react-bootstrap/';
import "./Buying.css"
export default function Buying() {
    const navigate = useNavigate()
    const [views, setViews] = useState([])
    const item1 = {view:"tree",item_image:"https://picsum.photos/50/50"}  //constant
    const order2 = {item: item1, o_n:"500", sell_date:"today", Price:"2222",seller:"jack@66",status:"googd"}; //constant
    const orders = []
    let  i = 0
    for (let i = 0; i < 10; i++){
        orders.push(order2)
    }
    const get_view_history = () => {
        axios.get(process.env.REACT_APP_BASENAME+`api/view_history.php`,{withCredentials: true}).then(function(response) {
            console.log(response.data);
            setViews(response.data)
        }).catch(function (error) {
            console.log(error.response.status) // 401
            console.log(error.response.data.error) //Please Authenticate or whatever returned from server
            if(error.response.status==401){
                navigate('/login')
            }
        });
    }
    useEffect(()=>{
        get_view_history()
    }, [])

    function rows(order1){
        return(
            <tr>
                {/* {order1['item_name']} */}
                <th className='table_header' key={i}>
                    <div className='box'>
                        <span className='view_history_name'>{order1['item_name']}<br></br>
                            <Link to={'/iteminfo?var='+order1['item_id']}>
                                <img className='history_item_image' src={process.env.REACT_APP_BASENAME+"uploads/"+order1['item_image_dir']} ></img>
                            </Link>
                        </span> 
                        <span className='view_history_time'>{order1['time_created']}</span>
                    </div>
                </th>
                
            </tr>
        )
    }
  return (
        <Container>
            <table className='view_history_table'>
                <tbody>
                    <tr>
                        <th className='view_history_title'>History</th>
                        {/* <th className='table_header'>Order number</th>
                        <th className='table_header'>Sell date</th>
                        <th className='table_header'>Price</th>
                        <th className='table_header'>Seller</th>
                        <th className='table_header'>Status</th> */}
                    </tr>
                    <div className='view_history_table'>
                        {views.map(item=>rows(item))}
                        </div>
                </tbody>
            </table>
        </Container>
  )
}
