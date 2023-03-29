import { Button } from 'bootstrap';
import React from 'react'
import {Col,Container,Row} from 'react-bootstrap/';
import "./Buying.css"
export default function Buying() {
    const item1 = {item_name:"tree",item_image:"https://picsum.photos/50/50"}  //constant
    const order2 = {item: item1, o_n:"500", sell_date:"today", Price:"2222",seller:"jack@66",status:"googd"}; //constant
    const orders = []
    let  i = 0
    for (let i = 0; i < 10; i++){
        orders.push(order2)
    }
    function one_row(order1){
        return(
            <tr>
                {Object.keys(order1).map((keyName, i) => (
                    <th className='table_header' key={i}>
                        {keyName=='item' ? 
                        <div className='box'>
                            <img src = {order1[keyName]['item_image']}></img>
                            <span>{order1[keyName]['item_name']}</span> 
                        </div>
                        : order1[keyName]}
                    </th>
                ))}
            </tr>
        )
    }
  return (
        <Container>
            <Row xs="auto">
                <Col>
                    <button>Current</button>
                </Col>
                <Col>
                    <button>Pending</button>
                </Col>
                <Col>
                    <button>History</button>
                </Col>
            </Row>
            <table>
                <tbody>
                    <tr>
                        <th className='table_header'>Item</th>
                        <th className='table_header'>Order number</th>
                        <th className='table_header'>Sell date</th>
                        <th className='table_header'>Price</th>
                        <th className='table_header'>Seller</th>
                        <th className='table_header'>Status</th>
                    </tr>
                        {orders.map(one_row)}
                </tbody>
            </table>
        </Container>
  )
}
