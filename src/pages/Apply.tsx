import '../stylesheets/Application.css';
import React from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";

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
