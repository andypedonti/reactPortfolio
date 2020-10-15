import React from "react";
import Card from "../components/Card";
import "./style.css";


function About() {
    return (
        <Card>
            <div class="card-body">
                <img src="./components/pics/018.jpg" height="225" width="150" >


                </img>
                <h4 class="card-title">About Me</h4>
                <h6 class="card-subtitle mb-2 text-muted">Husband, father, angler</h6>

            </div>
        </Card>

    )
}

export default About;