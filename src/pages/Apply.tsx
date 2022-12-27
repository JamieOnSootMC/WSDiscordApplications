import '../stylesheets/Application.css';
import React, {useRef} from "react";

let answers: { id: string, answer: string }[] = [];

function Application() {

    return (
        <div className="Application">
            <form name="application" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="application" />
                <div className="form-group">
                    <label htmlFor="name"> First thing's first. What is your Email Address? </label>
                    <br/>
                    <br/>
                    <input type="email" name="email" id="email" placeholder="swag@wilbursoot.live" />

                    <br/>
                    <br/>
                    <br/>
                    <hr/>
                    <br/>

                    <h2> Lets get to know you! </h2>
                    <p> </p>
                </div>
            </form>
        </div>
    )
}

export default Application;
