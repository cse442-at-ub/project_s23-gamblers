import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import React from "react";
import styles from './Services.module.css'
import Header from "./Header";
import { Link } from 'react-router-dom';
function Home(){

    const [itemData, setItemData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    function getItem(){
        axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/all_item').then(function(response){
            console.log(response.data)
            setItemData(response.data)
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        getItem()
    },[])

    if(isLoading){
        return<p>Loading</p>
    }
    
    console.log(itemData)
    return(
        <div>
            <Header setItemData={setItemData}></Header>
            <div className={`${styles.section__padding} ${styles.bg__whitesmoke}`} >
                <div className={styles.container}>
                    <div className={`${styles.services__content} ${styles.grid}`}>
                        {
                            itemData.map((service, index) => {
                                return (
                                    <div className={`${styles.services__contentitem} ${styles.text__center}`} key={index}>
                                        <div><img
                                            alt=""
                                            src={`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/uploads/${itemData[index].item_image_dir}`}
                                            className='item-image'
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
export default Home