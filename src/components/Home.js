import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import React from "react";
import styles from './Services.module.css'
import Header from "./Header";
function Home(){

    const [itemData, setItemData] = useState([{

        title: "Amethyst",
        text: 'price: $20  post date: 2023.3.13',
        poster: 'Ming'
    },
        {

            title: "Amethyst",
            text: 'price: $20  post date: 2023.3.13',
            poster: 'Ming'
        },
        {

            title: "Amethyst",
            text: 'price: $20  post date: 2023.3.13',
            poster: 'Ming'
        },
        {

            title: "Amethyst",
            text: 'price: $20  post date: 2023.3.13',
            poster: 'Ming'
        },
        {

            title: "Amethyst",
            text: 'price: $20  post date: 2023.3.13',
            poster: 'Ming'
        },
        {

            title: "Amethyst",
            text: 'price: $20  post date: 2023.3.13',
            poster: 'Ming'
        },
        {

            title: "Amethyst",
            text: 'price: $20  post date: 2023.3.13',
            poster: 'Ming'
        },
        {

            title: "Amethyst",
            text: 'price: $20  post date: 2023.3.13',
            poster: 'Ming'
        }])

    function getItem(){
        axios.get('link').then(function(response){
            setItemData(response.data)
        })
    }

    useEffect(()=>{
        getItem()
    },[])

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
                                        <div>This is image</div>
                                        <h4 className={`${styles.text__upper} ${styles.text}`}>{service.title}</h4>
                                        <p className={`${styles.para__text} ${styles.text__grey}`}>{service.text}</p>
                                        <p className={`${styles.para__text} ${styles.text__grey}`}>poster: {service.poster}</p>
                                        <a href="/iteminfo" className={`${styles.btn}  ${styles.btn__blue}`}>more info</a>
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