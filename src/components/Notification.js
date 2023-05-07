import React from 'react'
import Header from "./Header";
import {useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Services.module.css'
import { Link } from 'react-router-dom';
import {Form,Col,Container,Row} from 'react-bootstrap/';

let messages = [
    {'message':"hhh"},
    {'message':'zzzz'},
]
export default function Notification() {
    const [messages, setMessages] = useState([])
    function dismiss(id){
        console.log(id)
        axios.post(
            process.env.REACT_APP_BASENAME+'api/likeitem', 
            JSON.stringify({
                islike: false,
                item_id: id
            }),
            {
                withCredentials:true
            }
            ).then(function (response) {
            console.log(response)
            document.getElementById(id).innerHTML = ""
        })
    }
    function get_notification(){
        axios.get(
            process.env.REACT_APP_BASENAME+`api/notification`,
            {withCredentials:true}
        ).then(function (response) {
            setMessages(response.data)
        }).catch(function(error){
            setMessages([])
        })
    }
    useEffect(() => {
        get_notification()
    }, [])
  return (
    <div><Header setItemData={''}></Header>
    <div className={`${styles.section__padding} ${styles.bg__whitesmoke}`} >
        <Container>
            {
                messages.length!=0?
                messages.map((message,index)=>{
                    return (
                        <Row className='mt-3' id = {message['item_id']}>
                            <Col>
                                <div className={`${styles.btn}  ${styles.btn__blue}`}>
                                    <img className='noti_bell_svg' src={process.env.REACT_APP_BASENAME+`uploads/`+message['item_image_dir']}></img>
                                    <span >{message['item_name']} was deleted</span>
                                </div>
                            </Col>
                            <Col>
                                <button  className={`${styles.btn}  ${styles.btn__red}`} onClick={()=>{dismiss(message['item_id'])}}>dismiss</button>
                            </Col>
                        </Row>
                    )
                })
                :
                <div>
                    <span  className={`${styles.btn}  ${styles.btn__red}`} >No Notifications now</span>
                </div>
            }
        </Container>
                
        </div>
    </div>
  )
}
