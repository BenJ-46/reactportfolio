
import React, { useState } from 'react'
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';

const Project = props => {
    const [media, setMedia] = useState(false)

    return(
        <div>
        <Media>
          <Media left top href="#">
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
        
        <Media className="mt-1">
          <Media left middle href="#">
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Project 2
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        
        <Media className="mt-1">
          <Media left bottom href="#">
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Project 3
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </div>
    );  
    
}
