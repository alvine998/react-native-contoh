import React, { Component, Fragment } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, Right, Title, Form, Label,Input, Item} from 'native-base';
import Headerin from '../components/Header';
import RegisForm from '../components/FormSignUp';

class Registrasi extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Container style={{backgroundColor:'#87cefa'}}>
                    <Headerin/>
                    
                    <Form style={{alignItems:'center', justifyContent:'center'}}>
                        <Item floatingLabel style={{width:150}}>
                        <Label style={{textAlign: 'center '}}>Username</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel style={{width:150}}>
                        <Label style={{textAlign: 'center '}}>Password</Label>
                        <Input />
                        </Item>
                    </Form>
                    
                </Container>
            </Fragment>
            
         );
    }
}

const styles = StyleSheet.create({

})
 
export default Registrasi;