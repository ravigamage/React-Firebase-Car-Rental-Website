import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import '../styles/contact.css'; // Make sure this path is correct

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(""); // State to manage success or error message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zs47ahr",
        "template_z492tww",
        form.current,
        "EE4zEb3yxn-Qz00w4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Email sent successfully!"); // Update the message on success
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send email."); // Update the message on error
        }
      );
  };

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {message && <p>{message}</p>} {/* Display the message if it exists */}
    </div>
  );
};

export default Contact;
