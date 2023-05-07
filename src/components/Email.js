import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Email.css'
// npm i @emailjs/browser

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_s7fuxzt",
                "template_ihqja0j",
                form.current,
                "w5vbAvXKRzq4b_XEm"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    window.alert('Message sent')
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <h1>Please enter your complain</h1>
           <form ref={form} onSubmit={sendEmail}>
            <div><label ><h2>Name</h2></label>
                <input type="text" name="user_name" className="nameEmail"/>
                </div>
                <br></br>
            <div><label ><h2>Your Email</h2></label>
                <input type="email" name="user_email" className="nameEmail" />
                </div>
                <br></br>
            <div><label ><h2>Message</h2></label>
                <textarea name="message" className="nameEmail" />
                </div>
                <br></br>
                
                
                <div>
                    <button type="submit" className="LoginButton">Submit</button>
                </div>
                
            </form>  
        </div>
           

    );
};

export default Contact;
