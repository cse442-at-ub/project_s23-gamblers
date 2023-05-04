import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
           <form ref={form} onSubmit={sendEmail} className="form">
                <label >Name</label>
                <input type="text" name="user_name" />
                <label >Your Email</label>
                <input type="email" name="user_email" />
                <label >Message</label>
                <textarea name="message"  />
                <input type="submit" value="Send" />
            </form>  
        </div>
           

    );
};

export default Contact;
