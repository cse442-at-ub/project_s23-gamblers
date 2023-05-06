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
    const [filter, setFilter] = useState(0)

    function getItem(){
        axios.get(process.env.REACT_APP_BASENAME+'api/all_item').then(function(response){
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
    
    if(filter===0){
        return(
            <div className={`${styles.bg__whitesmoke}`}>
                <Header setItemData={setItemData}></Header>
                <div className={`${styles.flex__center} ${styles.bg__whitesmoke}`}>
                <button className={`${styles.btn}  ${styles.btn__blue}`} onClick={()=>setFilter(1)}>$50 OR LOWER</button>
                <button className={`${styles.btn}  ${styles.btn__blue} `} onClick={()=>setFilter(0)}>SHOWALL</button>
                </div>
                <div className={`${styles.section__padding} ${styles.bg__whitesmoke}`} >
                    <div className={styles.container}>
                        <div className={`${styles.services__content} ${styles.grid}`}>
                            {
                                itemData.map((service, index) => {
                                    return (
                                        <div className={`${styles.services__contentitem} ${styles.text__center}`} key={index}>
                                            <div><img
                                                alt=""
                                                src={process.env.REACT_APP_BASENAME+`uploads/${itemData[index].item_image_dir}`}
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
    }else if(filter===1){
        return(
            <div className={`${styles.bg__whitesmoke}`}>
                <Header setItemData={setItemData}></Header>
                <div className={`${styles.flex__center} ${styles.bg__whitesmoke}`}>
                <button className={`${styles.btn}  ${styles.btn__blue}`} onClick={()=>setFilter(1)}>$50 OR LOWER</button>
                <button className={`${styles.btn}  ${styles.btn__blue}`} onClick={()=>setFilter(0)}>SHOWALL</button>
                </div>
                <div className={`${styles.section__padding} ${styles.bg__whitesmoke}`} >
                    <div className={styles.container}>
                        <div className={`${styles.services__content} ${styles.grid}`}>
                            {
                                itemData.map((service, index) => {
                                    if(service.item_price<=50){
                                        return (
                                            <div className={`${styles.services__contentitem} ${styles.text__center}`} key={index}>
                                                <div><img
                                                    alt=""
                                                    src={process.env.REACT_APP_BASENAME+`uploads/${itemData[index].item_image_dir}`}
                                                    className={`${styles.postimage}`}
                                                /></div>
                                                
                                                <h4 className={`${styles.section__title} ${styles.text}`}>{service.item_name}</h4>
                                                <p className={`${styles.para__text} ${styles.text__grey}`}>{service.item_description}</p>
                                                <p className={`${styles.para__text} ${styles.text__grey}`}>${service.item_price} </p>
                                                <p className={`${styles.para_text_smaller} ${styles.text__grey}`}>View: {service.view_count}</p>
                                                <Link to={`/iteminfo?var=${service.item_id}`} className={`${styles.btn}  ${styles.btn__blue}`}>more info</Link>
                                            </div>
                                        )
                                    }
                                    
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home
