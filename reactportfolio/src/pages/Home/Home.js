import React from 'react'
import { Jumbotron, Button } from 'reactstrap';


const Home = () => {
    return(
        <div>
        <Jumbotron>
          <h1 className="display-3">Benjamin Jimenez</h1>
          <p className="lead">I am a 22 year old web development student. I have previously worked as a coffee barista, a bank teller, and construction materials lab technician.
          My hobbies include powerlifting, fishing, and camping. I love the outdoors and all It has to offer! I have a 3 year old Golden Retriever named Oliver, who loves to play, eat, and rip apart napkins!</p>
          <hr className="my-2" />
          <p>Here are my links to my Github and LinkedIn</p>
          <p className="lead">
            <Button href="https://github.com/BenJ-46" color="primary">Github</Button>
            <Button href="www.linkedin.com/in/benjamin-jimenez-1849121b1" color="primary">LinkedIn</Button>
          </p>
        </Jumbotron>
      </div>
    );
  };

export default Home