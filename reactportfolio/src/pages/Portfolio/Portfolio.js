import React from 'react'
import Project from '../../components/Project'
import { Container } from 'reactstrap';
import BiteWallet from '../../pictures/Bite-Wallet.png'
import RanchHand from '../../pictures/RanchHand.png'
import Notetaker from '../../pictures/NoteTaker.png'
import Password from '../../pictures/PasswordGenerator.png'
import Planner from '../../pictures/Planner.png'
import Weather from '../../pictures/Weather.png'


const Portfolio = () => {
    return(
        <>
        <Container>
            <h1>Work</h1>
            <Project
            name={"Bite Wallet"}
            description={"A application that allows users to check whatever stock you are invested in and will return up to date accurate information, as well as local restaurant suggestions based off of how well your chosen stock is doing."}
            app={" https://shellynguyen98.github.io/Project-1/"}
            repo={" https://github.com/ShellyNguyen98/Project-1"}
            picture={BiteWallet}
            />

            <Project
            name={"Ranch Hand"}
            description={"This app was made for small or large scale horse ranches or equestrian centers to help keep track of the care and health of as many horses as you have."}
            app={" https://gentle-taiga-08855.herokuapp.com/index.html"}
            repo={" https://github.com/ShellyNguyen98/Project02"}
            picture={RanchHand}
            />

            <Project
            name={"Note Taker App"}
            description={"This application allows a user to take notes, which will locally save and allows you to delete notes."}
            app={" https://rocky-wildwood-41565.herokuapp.com/"}
            repo={" https://github.com/BenJ-46/WK6HW1.git"}
            picture={Notetaker}
            />

            <Project
            name={"Password Generator"}
            description={"Password Generator application allows a user to randomly generate a password"}
            app={" https://benj-46.github.io/Week2HW1/"}
            repo={" https://github.com/BenJ-46/Week2HW1.git"}
            picture={Password}
            />

            <Project
            name={"Day Planner"}
            description={"This Day Planner app lets a user add events into a calender-themed webpage based on time of day, which also gives user ability to save and delete."}
            app={" https://benj-46.github.io/Wk3HW1/"}
            repo={" https://github.com/BenJ-46/Wk3HW1"}
            picture={Planner}
            />

            <Project
            name={"Weather App"}
            description={"This weather application allows a user to type in any city name and a weather API will retrieve the local up-to-date data."}
            app={" https://benj-46.github.io/Wk3HW2/"}
            repo={" https://github.com/BenJ-46/Wk3HW2"}
            picture={Weather}
            />
        </Container>
        </>
    )
}

export default Portfolio