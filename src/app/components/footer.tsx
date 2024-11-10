import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p className="quote">&quot;The only way to do great work is to love what you do.&quot; - Steve Jobs</p>
      <div className="social-icons">
        <a 
          href="https://www.linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn profile"
        >
          <FaLinkedin size={30} />
        </a>
        <a 
          href="https://github.com/your-profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub profile"
        >
          <FaGithub size={30} />
        </a>
        <a 
          href="https://twitter.com/your-profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Twitter profile"
        >
          <FaTwitter size={30} />
        </a>
        <a 
          href="https://instagram.com/your-profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram profile"
        >
          <FaInstagram size={30} />
        </a>
      </div>
      <p className="footer-info">
        Let&apos;s work together! <a href="#contact" className="contact-link">Contact Me</a>
      </p>
    </footer>
  );
}

export default Footer;
