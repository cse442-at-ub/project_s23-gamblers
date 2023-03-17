import React from "react";
import data from "../constants/data";
import "./Services.css";
import Header from "./Header";
const Services = () => {
    return (
        <div>
        <Header></Header>
        <div className="services section__padding bg__whitesmoke">
            <div className="container">
                <div className="services__content grid">
                    {
                        data.services.map((service, index) => {
                            return (
                                <div className="services__content--item text__center" key = {index}>
                                    <img src = {service.img} alt = "item_image" className="icon" />
                                    <h4 className="text__upper text">{service.title}</h4>
                                    <p className="para__text text__grey">{service.text}</p>
                                    <p className="para__text text__grey">poster: {service.poster}</p>
                                    <a href = "/iteminfo" className="btn btn__blue">more info</a>
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