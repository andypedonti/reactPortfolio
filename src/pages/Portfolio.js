import React from "react";
import Card from "../components/Card";
import { portfolioContent } from "./portfolioContent.js";
import "../components/Card/style.css";
import normalizeCSSUnit from 'normalize-css-unit';
import DevIcon from "devicon-react-svg";


function Portfolio() {
    normalizeCSSUnit(100);
    return (

        <Card>
            <div className="portfolio-containers">
                {
                    portfolioContent.map((item) =>

                        <div className="portfolio-item">
                            <div className="icon-bar">
                            <DevIcon icon={item.css} height={20} width={20}/>
                            <DevIcon icon={item.javascript} height={20} width={20}/>
                            <DevIcon icon={item.html} height={20} width={20}/>
                            <DevIcon icon={item.node} height={20} width={20}/>
                            <DevIcon icon={item.react} height={20} width={20}/>
                            <DevIcon icon={item.jquery} height={20} width={20}/>
                            <DevIcon icon={item.mongo} height={20} width={20}/>
                            <DevIcon icon={item.mysql} height={20} width={20}/>
                            <DevIcon icon={item.bootstrap} height={20} width={20}/>
                            <DevIcon icon={item.npm} height={20} width={20}/>
                            </div>
                        

                            <a style={{ color: '#2F4F4F' }} href={item.url} target="_blank" rel="noopener noreferrer">
                                <h3>{item.title}</h3>
                            </a>
                            <p>{item.description}</p>
                            <a style={{ color: '#2F4F4F' }} href={item.github} target="_blank" rel="noopener noreferrer">
                                <p>GitHub Repository</p>
                                <img src={item.image} alt=""></img>
                            </a>
                        </div>
                    )
                }

            </div>
        </Card >
    )
}

export default Portfolio;