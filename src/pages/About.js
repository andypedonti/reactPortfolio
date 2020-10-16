import React from "react";
import Card from "../components/Card";
import "./style.css";


function About() {
    return (
        <Card>
            <div class="card-body">

                <div className="item-a">


                    <img src="./components/pics/018.jpg" height="225" width="150" >


                    </img>
                    <h4 class="card-title">About Me</h4>
                </div>

                <div className="item-b">
                    <p className="card-subtitle mb-2 text-muted">I am an leader and team builder with 14 years experience in the landscape industry. I enrich people lives
                    by teaching the skills and ethics needed to advance in thier career. I hope to continue this leadership and enrichment through coding and web developement
                    to enhance the life and prosperity of others weather it be through teamwork or thoughful content delivered through user friendly interfaces. </p>
                </div>


            </div>
        </Card>

    )
}

export default About;