import './components.css';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact The Caretaker</h1>
      <p className="contact-intro">
        Should you wish to communicate with me across the void, there are several methods
        by which your message may reach The Library.
      </p>
      
      <div className="contact-methods">
        <div className="contact-method">
          <h2>Ethereal Transmission</h2>
          <p>
            For direct communication, you may send an ethereal transmission to:
            <br />
            <a href="mailto:ghannodahn@infinitycitadel.com" className="contact-link">
              ghannodahn@infinitycitadel.com
            </a>
          </p>
        </div>
        
        <div className="contact-method">
          <h2>Dimensional Coordinates</h2>
          <p>
            The Library exists at the following coordinates in the digital realm:
            <br />
            <a href="https://github.com/Ghannodahn" className="contact-link" target="_blank" rel="noopener noreferrer">
              GitHub Nexus
            </a>
          </p>
        </div>
        
        <div className="contact-method">
          <h2>Send a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Designation</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Return Transmission Coordinates</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows={5} placeholder="What knowledge do you seek?"></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Transmit Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;