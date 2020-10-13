import React from "react";
import Card from "../components/Card";
import { portfolioContent } from "./portfolioContent.js";
import "./style.css";

function Portfolio() {
    return (

        <Card>
            <div className="portfolio-containers">
                {
                    portfolioContent.map((item) =>

                        <div className="portfolio-item">
                            <a href={item.url}>
                                <h2>{item.title}</h2>
                                <img src={item.image}></img>
                                <p>{item.description}</p>
                            </a>
                        </div>
                    )
                }

            </div>
        </Card >
    )
}

export default Portfolio;