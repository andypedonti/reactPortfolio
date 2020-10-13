import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <button className="button">
                <a href="mailto:andy.pedonti@gmail.com">Email</a>
            </button>
            <button className="button">
                <a href="https://www.github.com/andypedonti">
                    github
                </a>
            </button>
        </footer>
    )
}

export default Footer;