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
                    <h6 className="card-subtitle mb-2 text-muted">Husband, father, angler</h6>
                </div>
                <div className="item-c">
                    <p>this hospital sucks</p>
                </div>

            </div>
        </Card>

    )
}

export default About;