import React from "react";
import "../stylesheets/Contact.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div className="main-form">
      <Navbar />
      <form action="POST" className="form-container">
      <h1>Contact me!</h1>
      <input type="text" name="name" placeholder="Name" />
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
      <input type="email" name="email" placeholder="E-mail" />
      <input type="submit" name="send" />
    </form>
    <Footer />
    </div>
    
  );
}

export default Contact;
