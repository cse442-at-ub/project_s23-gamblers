import React from "react";
import data from "../constants/data";
import styles from './Services.module.css'
import Header from "./Header";
const Services = () => {
    return (
        <div>
        <Header></Header>
            <div className={`${styles.section__padding} ${styles.bg__whitesmoke}` } >
            <div className={styles.container}>
                    <div className={`${styles.services__content} ${styles.grid}`}>
                    {
                        data.services.map((service, index) => {
                            return (
                                <div className={`${styles.services__contentitem} ${ styles.text__center }`} key = {index}>
                                    <img src = {service.img} alt = "item_image" className={styles.icon} />
                                    <h4 className={`${styles.text__upper} ${styles.text}`}>{service.title}</h4>
                                    <p className={`${styles.para__text} ${styles.text__grey}`}>{service.text}</p>
                                    <p className={`${styles.para__text} ${styles.text__grey}`}>poster: {service.poster}</p>
                                    <a href = "/iteminfo" className={`${styles.btn}  ${styles.btn__blue}`}>more info</a>
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