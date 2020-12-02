import React, { Component, Fragment } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Body,Button,  Container, Header, Icon, Left, Right, Title, Form, Label,Input, Item} from 'native-base';
import Headerin from '../components/Header';
import RegisForm from '../components/FormSignUp';
import { Actions } from 'react-native-router-flux';


class Registrasi extends Component {
    state = { 
        
     }

     
    render() {
        const goToLogin = () => {
            Actions.login()
        }
        return ( 
            <Fragment>
                <Headerin/>
                <Container style={{backgroundColor:'#FFFFFF', alignItems:"center"}}>
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
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Button primary style={{marginTop:20,width:150 ,alignItems:"center", justifyContent:"center", borderRadius:20, backgroundColor:"#229BD7"}}>
                            <Text style={{color:'white', fontSize:20}}>Submit</Text>
                        </Button>
                    </View>
                        
                        <View style={{marginTop:20}}>
                            <Text style={{textAlign:'center', fontSize:16}}>Already Have an Account?</Text>
                            <Text style={{color: '#229BD7', textAlign:'center', fontSize:16}} onPress={() => Linking.openURL('')}>Login Here</Text>
                        </View>
                </Container>
                
                
                
                </Fragment>
                
            
            
         );
    }
}

const styles = StyleSheet.create({

})
 
export default Registrasi;