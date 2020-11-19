import React, { Component, Fragment } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Body,Button,  Container, Header, Icon, Left, Right, Title, Form, Label,Input, Item} from 'native-base';
import Headerin from '../components/Header';
import RegisForm from '../components/FormSignUp';

class Registrasi extends Component {
    state = { 
        
     }

     
    render() {
        
        return ( 
            <Fragment>
                <Headerin/>
                <Container style={{backgroundColor:'#FFFFFF'}}>
                    <Form style={{alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize: 20}}>Sign Up</Text>
                        <Item floatingLabel style={{width:250}}>
                            <Label style={{textAlign: 'left'}}>Name</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={{width:250}}>
                            <Label style={{textAlign: 'left'}}>No. Phone</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={{width:250}}>
                            <Label style={{textAlign: 'left'}}>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={{width:250}}>
                            
                            <Label style={{textAlign: 'left'}}>Password</Label>
                            <Input secureTextEntry={true}  />
                           
                        </Item>
                        
                    </Form>
                    
                        <Button primary style={{marginLeft: 130, marginTop:20}}>
                            <Text>            Submit           </Text>
                        </Button>
                        <View style={{marginTop:20}}>
                            <Text style={{textAlign:'center'}}>Already Have an Account?</Text>
                            <Text style={{color: 'blue', textAlign:'center'}} onPress={() => Linking.openURL('')}>Login Here</Text>
                        </View>
                </Container>
                
                
                
                </Fragment>
                
            
            
         );
    }
}

const styles = StyleSheet.create({

})
 
export default Registrasi;