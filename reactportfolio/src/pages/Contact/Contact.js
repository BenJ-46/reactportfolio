import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap'

const Contact = () => {
  return (
    <Container>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="test" name="name" placeholder="John Doe" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="johndoe@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="text" name="Enter your message" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          </Container>
  )
}

export default Contact