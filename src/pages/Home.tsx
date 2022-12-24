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
                <p> UWU </p>
            </div>

            <div className="button">
                <a href="/apply"> <button> Apply Now! </button> </a>
            </div>
        </div>
    )
}

export default Home;
