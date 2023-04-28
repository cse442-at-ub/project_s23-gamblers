import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate , Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import {Col,Container,Row} from 'react-bootstrap/';
import PostForm from './PostForm';
export default function MyPost() {
    const [myItem ,setMyItem] = useState([]);
    const [popup, setPopup] = useState(false)
    const get_items_history = () => {
        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/my_items.php`,{withCredentials: true}).then(function(response) {
            console.log(response.data);
            setMyItem(response.data)
        }).catch(function (error) {
            console.log(error.response.status) // 401
            console.log(error.response.data.error) //Please Authenticate or whatever returned from server
            if(error.response.status==401){
            }
        });
    }
    useEffect(
        ()=>{
            get_items_history()
        },
        []
    )

    function editHandler(){
        setPopup(true)
    }

    function rows(order1){
        console.log(order1)
        if(!popup){return(
            <tr>
                {/* {order1['item_name']} */}
                <th className='table_header' key={order1['item_id']}>
                    <div className='box'>
                        <span className='view_history_name'>{order1['item_name']}<br></br>
                            <Link to={'/iteminfo?var='+order1['item_id']}>
                                <img className='history_item_image' src={"https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/uploads/"+order1['item_image_dir']} ></img>
                            </Link>
                        </span> 
                        <span className='view_history_time'>{order1['date_posted']}</span>
                    </div>
                    <button style={{backgroundColor:'red'}} onClick={()=>deleteHandler(order1['item_id'])}>Delete</button>
                    <button style={{ backgroundColor: 'green' }} onClick={() => editHandler(order1)}>Edit</button>
                </th>
            
            </tr>
        )}else{
            return(
                <PostForm data={order1}/>
            )
        }
        
    }
    function deleteHandler(e){
        console.log(e)
        axios.post(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/delete.php`,{
            item_id: e
          }).then(function(response){
            if(response.status === 200){
              window.alert('Post remove successful')
            }
            else{
              window.alert('Bad connection')
            }
          })
      }
  
  return (
    <Container>
            <Row xs="auto">
                <Col>
                </Col>
            </Row>
            <table className='view_history_table'>
                <tbody>
                    <tr>
                        <th className='view_history_title'> Items posted</th>
                    </tr>
                        {myItem.map(item=>rows(item))}
                </tbody>
            </table>
        </Container>
  )
}
