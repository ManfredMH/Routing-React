import React from 'react';
import './css/contact.css';

const Contact = () => {
    return (
        <form>
            <legend>Contact Form</legend>
            <div className="input-field">
                <label>Name: </label>
                <input type="text" placeholder="Your Name" />
            </div>
            <div className="input-field">
                <label>Email: </label>
                <input type="email" placeholder="Your Email" />
            </div>
            <div className="input-field">
                <label>Message: </label>
                <textarea></textarea>
            </div>
            <div className="input-field send">
                <input type="submit" value="Send" />
            </div>
        </form>
    );
};

export default Contact;