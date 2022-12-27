import '../stylesheets/Home.css';

function Home() {

    return (
        <div className="Home">

            <img src="https://cdn.discordapp.com/attachments/754400041430417438/1054021272851451974/WS_Rainy_holidays_reprise_-_Jennicatzies.gif" alt="Server Icon" className="server-icon" />
            <div className="intro">
                <h1> WilburSoot Discord Moderator Applications! </h1>

                <p> Hello! Welcome to the WilburSoot Discord Moderator Application! Here you will fill out a few questions to see if you're a good fit for moderator here! </p>
            </div>

            <br/>
            <br/>
            <hr/>
            <br/>

            <div className="info">
                <h1> Application Information </h1>
                <p>
                    Disclaimer: The data in this form is only viewable by our administrative
                    team, and is kept private in admin-only channels and handled by SootBot
                </p>

                <br/>
            </div>

            <div className="requirements">
                <h1> Requirements:</h1>
                <ul>
                    <li> Must be cool and also swag </li>
                    <li> Must not be called Josh, we have too many of those </li>
                </ul>
            </div>

            <div className="button">
                <button className="btn" onClick={handleClick}> Apply Now! </button>
            </div>
        </div>
    )
}

function handleClick() {
    window.location.href = "/apply";
}

export default Home;
