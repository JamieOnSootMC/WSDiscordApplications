import '../stylesheets/Application.css';
import { MoreResources } from "../helper";
import React from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import {render} from "react-dom";


let answers: { id: string, answer: string }[] = [];
const oneToTen: { value: string, label: string }[] = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" }
    ];

const discordBotOptions: { value: string, label: string }[] = [
    {
        value: "I have development experience when it comes to Discord bots and I use them for moderation.",
        label: "I have development experience when it comes to Discord bots and I use them for moderation."
    },
    {
        value: "I use/have used Discord bots to moderate another server.",
        label: "I use/have used Discord bots to moderate another server."
    },
    {
        value: "I have development experience when it comes to Discord bots, but I do not use them to moderate.",
        label: "I have development experience when it comes to Discord bots, but I do not use them to moderate."
    },
    {
        value: "I use Discord bots on a regular basis but only for recreational needs (not for moderation)",
        label: "I use Discord bots on a regular basis but only for recreational needs (not for moderation)"
    },
    {
        value: "I use Discord bots infrequently or not at all",
        label: "I use Discord bots infrequently or not at all"
    }
    ];

const yesNo: { value: string, label: string }[] = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" }
    ];

let enteredValues: string;

const complete = () => {
    return (
        <div>
            <h2>Thank you for applying for the Wilbur Soot Moderator position!</h2>
            <p>Good Luck, and we will be in contact if you are successful!</p>
        </div>
    );
};

const underAge = () => {
    return (
        <div>
            <h2> Sorry! You must be over the age of 18 to apply for this position </h2>
            <p> Come back later! </p>
        </div>
    )
}

function Application() {

    return (
        <div className="Application">
            <Formik
                initialValues={{
                    userName: "",
                    discordTag: "",
                    discordID: "",
                    pronouns: "",
                    age: 18,
                    discordLength: "",
                    aboutThem: "",
                    timezone: "",
                    activeTimes: "",
                    priorExp: "",
                    discordBots: "",
                    modExp: "",
                    discordLinks: "",
                    outsideExp: "",
                    learnt: "",
                    goodCandidate: "",
                    conflict: "",
                    teamRate: ""
                }}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    enteredValues = JSON.stringify(values, null, 2);
                    alert(enteredValues);
                    if(JSON.parse(enteredValues).age < 18) {
                        render(underAge(), document.getElementById("root"))
                    } else {
                        sendEmbed();
                        render(complete(), document.getElementById("root"));
                    }
                }}
                validationSchema={Yup.object().shape({
                    userName: Yup.string().required("Required"),
                    discordTag: Yup.string().required("Required"),
                    discordID: Yup.string().required("Required"),
                    pronouns: Yup.string().required("Required"),
                    age: Yup.string().required("Required"),
                    discordLength: Yup.string().required("Required"),
                    aboutThem: Yup.string().required("Required"),
                    timezone: Yup.string().required("Required"),
                    activeTimes: Yup.string().required("Required"),
                    priorExp: Yup.string().required("Required"),
                    discordBots: Yup.string().required("Required"),
                    modExp: Yup.string().required("Required"),
                    discordLinks: Yup.string().required("Required"),
                    outsideExp: Yup.string().required("Required"),
                    learnt: Yup.string().required("Required"),
                    goodCandidate: Yup.string().required("Required"),
                    conflict: Yup.string().required("Required"),
                    teamRate: Yup.string().required("Required")
                })}
            >
                {(props) => {
                    const {
                        setFieldValue,
                        touched,
                        errors,
                        isSubmitting,
                        handleSubmit
                    } = props;

                    // @ts-ignore
                    return (
                        <form onSubmit={handleSubmit}>
                            <h1> Lets get to know you! </h1>
                            <p>
                                {" "}
                                Tell us a little bit about yourself! Our team works better when we
                                know you well!{" "}
                            </p>

                            <br></br>
                            <label htmlFor="userName" style={{ display: "block" }}>
                                What is your name?
                            </label>
                            <p> Whatever you'd like us to call you! </p>
                            <Field id="userName" name="userName" placeholder="Jessica" type="text"/>

                            <br></br>
                            <br></br>

                            <label htmlFor="pronouns" style={{ display: "block" }}>
                                What are your preferred pronouns?
                            </label>
                            <Field id="pronouns" name="pronouns" placeholder="She/Her" />

                            <br></br>
                            <br></br>
                            <label htmlFor="discordTag" style={{ display: "block" }}>
                                What is your Discord tag?
                            </label>
                            <p> For example: Jessica🌻#1111 </p>
                            <Field
                                id="discordTag"
                                name="discordTag"
                                placeholder="Jessica🌻#1111"
                            />

                            <br></br>
                            <br></br>
                            <label htmlFor="discordID" style={{ display: "block" }}>
                                What is your Discord ID?
                            </label>
                            <p>
                                For example: 670043565954564116 If you are unsure how to get this, follow this <a target="_blank" href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-">link</a>
                            </p>
                            <Field
                                id="discordID"
                                name="discordID"
                                placeholder="123456789012345678"
                                type="number"
                            />

                            <br></br>
                            <br></br>
                            <label htmlFor="age" style={{ display: "block" }}>
                                How old are you?
                            </label>
                            <p> Please enter your current age only! </p>
                            <Field id="age" name="age" placeholder="18" type="number" />

                            <br></br>
                            <br></br>
                            <label htmlFor="discordLength" style={{ display: "block" }}>
                                How long have you been on Discord?
                            </label>
                            <p> This doesn't have to be exact </p>
                            <Field
                                id="discordLength"
                                name="discordLength"
                                placeholder="2 years"
                            />

                            <br></br>
                            <br></br>
                            <label htmlFor="aboutThem" style={{ display: "block" }}>
                                Tell us about yourself!
                            </label>
                            <p> What are your hobbies? Are you currently working or in education? What is your pet rock's name? </p>
                            <Field id="aboutThem" name="aboutThem" />

                            <br></br>
                            <br></br>
                            <label htmlFor="timezone" style={{ display: "block" }}>
                                What is your local timezone?
                            </label>
                            <p> For example: GMT/BST </p>
                            <Field id="timezone" name="timezone" placeholder="UTC-5" />

                            <br></br>
                            <br></br>
                            <label htmlFor="activeTimes" style={{ display: "block" }}>
                                What times are you most active on discord?
                            </label>
                            <Field
                                id="activeTimes"
                                name="activeTimes"
                                placeholder="12:00 PM - 4:00 PM"
                            />

                            <br></br>
                            <br></br>
                            <br/>

                            <hr/>

                            <br></br>

                            <h1> Experience Questions </h1>
                            <br></br>
                            <br></br>

                            <label htmlFor="priorExp" style={{ display: "block" }}>
                                Do you have any prior moderation experience on or off Discord?
                            </label>
                            <p> You can only select one answer! </p>

                            <Select
                                id="priorExp"
                                className="select"
                                placeholder="Select an option"
                                options={yesNo}
                                value={
                                    yesNo
                                        ? yesNo.find((option) => option.value === Field.name)
                                        : ""
                                }
                                onChange={(option) => setFieldValue("priorExp", option.value)}
                            />

                            <br></br>
                            <br></br>
                            <label htmlFor="discordBots" style={{ display: "block" }}>
                                How experienced are you with using Discord bots?
                            </label>
                            <Select
                                id="discordBots"
                                className="select"
                                placeholder="Select an option"
                                options={discordBotOptions}
                                value={
                                    discordBotOptions
                                        ? discordBotOptions.find((option) => option.value === Field.name)
                                        : ""
                                }
                                onChange={(option) => setFieldValue("discordBots", option.value)}
                            />

                            <br></br>
                            <br></br>
                            <label htmlFor="modExp" style={{ display: "block" }}>
                                What is your experience moderating other Discord servers?
                            </label>
                            <p> Please include your position on servers and an approximate member count on each server. Describe what duties you are required to do or type "none" if you have no moderation experience on Discord servers. </p>
                            <Field id="modExp" name="modExp" />

                            <br></br>
                            <br></br>

                            <label id="discordLinks" style={{ display: "block" }}>
                                Please include any relevant Discord server links!
                            </label>
                            <p>
                                Type "none" if you have no moderation experience on Discord
                                servers, or if the servers you moderate in are private.
                            </p>
                            <Field id="discordLinks" name="discordLinks" />

                            <br></br>
                            <br></br>

                            <label htmlFor="outsideExp" style={{ display: "block" }}>
                                What is your experience moderating non-Discord related
                                communities?
                            </label>
                            <p> These include, but are not limited to: Reddit, Facebook groups, Twitch and other private forums. Please include an approximate number of people and describe your duties of moderating in these communities. Type "none" if you have no moderation experience in non-Discord communities. </p>
                            <Field id="outsideExp" name="outsideExp" />

                            <br></br>
                            <br></br>
                            <label htmlFor="learnt" style={{ display: "block" }}>
                                What is the most important thing you’ve learned from your
                                moderation experience?
                            </label>
                            <p> You can include multiple situations if there are more than one. </p>
                            <Field id="learnt" name="learnt" />
                            <br></br>
                            <br></br>
                            <label htmlFor="goodCandidate" style={{ display: "block" }}>
                                Why do you think you’d make a great moderator on our server?
                            </label>
                            <p> What makes you a good candidate? Why should we pick you? Is there anything that is motivating you to fill out this form right now? </p>

                            <Field id="goodCandidate" name="goodCandidate" />

                            <br></br>
                            <br></br>
                            <label htmlFor="conflict" style={{ display: "block" }}>
                                Describe a time where you resolved conflict between two or more
                                people.
                            </label>
                            <p> What was the nature of the conflict? How did you help resolve it? How did the other involved parties feel about it? Would you do anything different now than you did then? </p>
                            <Field id="conflict" name="conflict" />

                            <br></br>
                            <br></br>
                            <label htmlFor="teamRate" style={{ display: "block" }}>
                                In your opinion, how well do you work in a team?
                            </label>
                            <p> 1 being very poor, 10 being excellent. </p>
                            <Select
                                id="teamRate"
                                className="select"
                                placeholder="Select an option"
                                options={oneToTen}
                                value={
                                    oneToTen
                                        ? oneToTen.find((option) => option.value === Field.name)
                                        : ""
                                }
                                onChange={(option) => setFieldValue("teamRate", option.value)}
                            />

                            <br/>
                            <br/>
                            <br/>

                            <button className="submit" type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    );
                }}
            </Formik>

            <MoreResources />
        </div>
    );

    function sendEmbed() {
        const data = {
            "content": "",
            "embeds": [
                {
                    "title": "New Discord Moderator Application!",
                    "color": 3385513,
                    "fields": [
                        {
                            "name": "What is your name?",
                            "value": JSON.parse(enteredValues).userName
                        },
                        {
                            "name": "What is your discord tag?",
                            "value": JSON.parse(enteredValues).discordTag
                        },
                        {
                            "name": "What is your discord ID?",
                            "value": JSON.parse(enteredValues).discordID
                        },
                        {
                            "name": "What are your preferred pronouns?",
                            "value": JSON.parse(enteredValues).pronouns
                        },
                        {
                            "name": "How old are you?",
                            "value": JSON.parse(enteredValues).age
                        },
                        {
                            "name": "How long have you been on Discord?",
                            "value": JSON.parse(enteredValues).discordLength
                        },
                        {
                            "name": "Tell us about yourself",
                            "value": JSON.parse(enteredValues).aboutThem
                        },
                        {
                            "name": "What is your local timezone?",
                            "value": JSON.parse(enteredValues).timezone
                        },
                        {
                            "name": "What times are you most active on discord?",
                            "value": JSON.parse(enteredValues).activeTimes
                        },
                        {
                            "name": "Do you have any prior moderation experience on or off Discord?",
                            "value": JSON.parse(enteredValues).priorExp
                        },
                        {
                            "name": "How experienced are you with using Discord bots?",
                            "value": JSON.parse(enteredValues).discordBots
                        },
                        {
                            "name": "What is your experience moderating other Discord servers?",
                            "value": JSON.parse(enteredValues).modExp
                        },
                        {
                            "name": "Please include any relevant Discord server links!",
                            "value": JSON.parse(enteredValues).discordLinks
                        },
                        {
                            "name": "What is your experience moderating non-Discord related communities?",
                            "value": JSON.parse(enteredValues).outsideExp
                        },
                        {
                            "name": "What is the most important thing you’ve learned from your moderation experience?",
                            "value": JSON.parse(enteredValues).learnt
                        },
                        {
                            "name": "Why do you think you’d make a great moderator on our server?",
                            "value": JSON.parse(enteredValues).goodCandidate
                        },
                        {
                            "name": "Describe a time where you resolved conflict between two or more people.",
                            "value": JSON.parse(enteredValues).conflict
                        },
                        {
                            "name": "In your opinion, how well do you work in a team?",
                            "value": JSON.parse(enteredValues).teamRate
                        }
                    ]
                }
            ],
            "attachments": []
        };

        fetch(
            'https://discord.com/api/webhooks/1029784298607358023/Y1aIjHvitt1mwHmzq0tAasOVfyB2c-T_ZRgTRktrXm2GdlZSOO7kqaBWYGET0d0_fmWY',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(r => r.json()).then(r => console.log(r));
    }
}

export default Application;
