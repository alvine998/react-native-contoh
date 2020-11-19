import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class RegisForm extends Component {
  render() {
    return (
        <Container>
            <Form transparent>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Container>
          
    );
  }
}