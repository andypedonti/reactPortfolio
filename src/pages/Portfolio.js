import React from "react";
import Card from "../components/Card";
import { portfolioContent } from "./portfolioContent.js";
import "../components/Card/style.css";

function Portfolio() {
    return (

        <Card>
            <div className="portfolio-containers">
                {
                    portfolioContent.map((item) =>

                        <div className="portfolio-item">
                            <a style={{ color: '#2F4F4F' }} href={item.url} target="_blank" rel="noopener noreferrer">
                                <h3>{item.title}</h3>
                            </a>
                            <p>{item.description}</p>
                            <a style={{ color: '#2F4F4F' }} href={item.github} target="_blank" rel="noopener noreferrer">
                                <p>GitHub Repository</p>
                                <img src={item.image}></img>
                            </a>
                        </div>
                    )
                }

            </div>
        </Card >
    )
}

export default Portfolio;