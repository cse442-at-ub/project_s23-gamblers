import React from 'react'
import Header from "./Header";
import {useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Services.module.css'
import { Link } from 'react-router-dom';

export default function Favorites() {
    const [itemDate, setItemData] = useState([])
    function get_favorites(){
        axios.get(
            process.env.REACT_APP_BASENAME+`api/likeitem`,
            {withCredentials:true}
        ).then(function (response) {
            setItemData(response.data)
        }).catch(function(error){
            setItemData([])
        })
    }
    useEffect(() => {
        get_favorites()
    }, [])
    return (
    <div>
        <Header setItemData={''}></Header>
        <div className={`${styles.section__padding} ${styles.bg__whitesmoke}`} >
                <div className={styles.container}>
                    <div className={`${styles.services__content} ${styles.grid}`}>
                        {
                            itemDate.map((service, index) => {
                                return (
                                    <div className={`${styles.services__contentitem} ${styles.text__center}`} key={index}>
                                        <div><img
                                            alt=""
                                            src={process.env.REACT_APP_BASENAME+`uploads/${itemDate[index].item_image_dir}`}
                                            className={`${styles.postimage}`}
                                        /></div>
                                        
                                        <h4 className={`${styles.section__title} ${styles.text}`}>{service.item_name}</h4>
                                        <p className={`${styles.para__text} ${styles.text__grey}`}>{service.item_description}</p>
                                        <p className={`${styles.para__text} ${styles.text__grey}`}>${service.item_price} </p>
                                        <p className={`${styles.para_text_smaller} ${styles.text__grey}`}>View: {service.view_count}</p>
                                        <Link to={`/iteminfo?var=${service.item_id}`} className={`${styles.btn}  ${styles.btn__blue}`}>more info</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    </div>
  )
}
