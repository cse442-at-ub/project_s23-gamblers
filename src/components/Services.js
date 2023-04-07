import React from "react";
import data from "../constants/data";
import styles from './Services.module.css'
import Header from "./Header";
import { useEffect } from 'react';
import { useCallback } from "react";
import { useState } from "react";
const Services = () => {

    // const [guest, setGuest] = useState()
    // const fetchUserHandler = useCallback(async () => {
    //     try {
    //         const response = await fetch('https://localhost/api/userinfo/',{credentials: 'include'})
    //         console.log(response)
    //         if (!response.ok) {
    //             throw new Error('Something went wrong!')
    //         }
    //         if (response.status === 403) {
    //             setGuest(true)
    //         }
    //         if (response.status === 200) {
    //             setGuest(false)
    //         }

    //     } catch (error) {
    //         throw new Error('Something went wrong!')
    //     }
    // }, []);


    // useEffect(() => {
    //     fetchUserHandler()
    // },[])

        return (
            
            <div>
                <Header></Header>
                <div className={`${styles.section__padding} ${styles.bg__whitesmoke}`} >
                    <div className={styles.container}>
                        <div className={`${styles.services__content} ${styles.grid}`}>
                            {
                                data.services.map((service, index) => {
                                    return (
                                        <div className={`${styles.services__contentitem} ${styles.text__center}`} key={index}>
                                            <img src={service.img} alt="item_image" className={styles.icon} />
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

export default Services;