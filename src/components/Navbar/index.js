import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                            }
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={
                                window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >

                            Portfolio
                        </Link>

                    </li>
                </ul>
            </div>
        </nav>




    )
}

export default NavBar;