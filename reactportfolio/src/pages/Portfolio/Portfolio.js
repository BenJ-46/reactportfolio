import React from 'react'
import Project from '../../components/Project'
import { Container } from 'reactstrap';
import bitewallet from '../..pictures/Bite-Wallet.png'



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
            picture={"bitewallet"}
            />
        </Container>
        </>
    )
}