import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import React from "react";
import styles from './Services.module.css'
import Header from "./Header";
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
    
    let allpost = true
    let L50 = false
    let L100 = false
    let L200 = false
    let L500 = false
    function Ler50(){
        allpost = false
        L50 = true
        L100 = false
        L200 = false
        L500 = false
    }
    // function L100(){
    //     allpost = false
    //     L50 = false
    //     L100 = true
    //     L200 = false
    //     L500 = false
    // }
    // function L200(){
    //     allpost = false
    //     L50 = false
    //     L100 = false
    //     L200 = true
    //     L500 = false
    // }
    // function L500(){
    //     allpost = false
    //     L50 = false
    //     L100 = false
    //     L200 = false
    //     L500 = true
    // }
    function showall(){
        allpost = true
        L50 = false
        L100 = false
        L200 = false
        L500 = false
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
                            // itemData.map((service, index) => {
                            //     return (
                            //         <div className={`${styles.services__contentitem} ${styles.text__center}`} key={index}>
                            //             <div><img
                            //                 alt=""
                            //                 src={`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/uploads/${itemData[index].item_image_dir}`}
                            //                 className='item-image'
                            //             /></div>
                                        
                            //             <h4 className={`${styles.section__title} ${styles.text}`}>{service.item_name}</h4>
                            //             <p className={`${styles.para__text} ${styles.text__grey}`}>Price: {service.item_price}</p>
                            //             <p className={`${styles.para__text} ${styles.text__grey}`}>poster: {service.user_id}</p>
                            //             <p className={`${styles.para_text_smaller} ${styles.text__grey}`}>View: {service.view_count}</p>
                            //             <a href={`/iteminfo?var=${service.item_id}`} className={`${styles.btn}  ${styles.btn__blue}`}>MORE INFO</a>
                            //         </div>
                            //     )
                            // })
                            itemData.map((service, index) => {
                                if (allpost == true){
                                    return (
                                        <div className={`${styles.services__contentitem} ${styles.text__center}`} key={index}>
                                            <div><img
                                                alt=""
                                                src={`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/uploads/${itemData[index].item_image_dir}`}
                                                className='item-image'
                                            /></div>
                                            
                                            <h4 className={`${styles.section__title} ${styles.text}`}>{service.item_name}</h4>
                                            <p className={`${styles.para__text} ${styles.text__grey}`}>Price: {service.item_price}</p>
                                            <p className={`${styles.para__text} ${styles.text__grey}`}>poster: {service.user_id}</p>
                                            <p className={`${styles.para_text_smaller} ${styles.text__grey}`}>View: {service.view_count}</p>
                                            <a href={`/iteminfo?var=${service.item_id}`} className={`${styles.btn}  ${styles.btn__blue}`}>MORE INFO</a>
                                        </div>
                                    )
                                }
                                else if (L50 == true && service.item_price <=50){
                                    return (
                                        <div className={`${styles.services__contentitem} ${styles.text__center}`} key={index}>
                                            <div><img
                                                alt=""
                                                src={`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/uploads/${itemData[index].item_image_dir}`}
                                                className='item-image'
                                            /></div>
                                            
                                            <h4 className={`${styles.section__title} ${styles.text}`}>{service.item_name}</h4>
                                            <p className={`${styles.para__text} ${styles.text__grey}`}>Price: {service.item_price}</p>
                                            <p className={`${styles.para__text} ${styles.text__grey}`}>poster: {service.user_id}</p>
                                            <p className={`${styles.para_text_smaller} ${styles.text__grey}`}>View: {service.view_count}</p>
                                            <a href={`/iteminfo?var=${service.item_id}`} className={`${styles.btn}  ${styles.btn__blue}`}>MORE INFO</a>
                                        </div>
                                    )
                                }
                            })

                        }
                    </div>
                </div>
            </div>
            <div>
                <button className={`${styles.btn}  ${styles.btn__blue}`} onClick={Ler50}>$50 or Lower</button>
            </div>
            <div>
                <button className={`${styles.btn}  ${styles.btn__blue}`} onClick={showall}>Showall</button>
            </div>
        </div>
    )
}
export default Home
