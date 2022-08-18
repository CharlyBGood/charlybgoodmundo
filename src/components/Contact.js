import "../stylesheets/Contact.css";

function Contact() {
  return (
    <div className="main-form">
      <form action="POST" className="form-container">
        <h1>Contact me!</h1>
        <input type="text" name="name" placeholder="Name" />
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="submit" name="send" />
      </form>
    </div>
  );
}

export default Contact;
