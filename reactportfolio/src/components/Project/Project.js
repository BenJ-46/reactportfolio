
import React, { useState } from 'react'
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';

const Project = props => {
    const [media, setMedia] = useState(false)

    return(
        <div>
        <Media>
          <Media left middle href="#">
            <Media object data-src={props.picture} alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              {props.name}
            </Media>
            {props.description}
          </Media>
          <Button color="primary" size="lg" href={props.app} active>Click to Open App</Button>{' '}
          <Button color="secondary" size="lg" href={props.repo} active>Github Repo</Button>
        </Media>
        
      </div>
    );  
    
}
export default Project
