import React from "react";
import "./style.css";
import SocialLogo from 'social-logos';


function Footer() {
   
    return (
        <footer className="footer">

          <a href="https://www.linkedin.com/in/andy-pedonti/"
          target="_blank" rel="noopener noreferrer">
              <SocialLogo className="social" icon="linkedin" size={40} />
          </a>
          <a href="https://github.com/andypedonti"
          target="_blank" rel="noopener noreferrer">
                <SocialLogo className="social" icon="github" size={40} />
          </a>
            
           
           
        </footer>
    )
}

export default Footer;