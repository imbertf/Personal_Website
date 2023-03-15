import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SubmitButton from "../../components/Buttons/SubmitButton";

export const ContactMe = () => {
    const [status, setStatus] = useState("Send");
    const form = useRef();
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setStatus("Send");
        alert("Message sent");
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label>Name</label>
                <input type="text" name="user_name" required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="user_email" required />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" required />
            </div>

            <SubmitButton text={status} />
        </form>
    );
};

export default ContactMe;
