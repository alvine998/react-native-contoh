import React, { Component, Fragment } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Body,Button,  Container, Header, Icon, Left, Right, Title, Form, Label,Input, Item} from 'native-base';
import Headerin from '../components/Header';
import RegisForm from '../components/FormSignUp';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// firebase.initializeApp({
//     apiKey: "AIzaSyBJ_Fpkq165_AgkBLr4npVwEq2yHirAbBA",
//     authDomain: "carikamar2020.firebaseapp.com",
//     databaseURL: "https://carikamar2020-default-rtdb.firebaseio.com",
//     projectId: "carikamar2020",
//     storageBucket: "carikamar2020.appspot.com",
//     messagingSenderId: "581669848000",
//     appId: "1:581669848000:web:72e6788c9d9f884aa67e25",
//     measurementId: "G-HF7GFNQLS6"
// });

class Registrasi extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name:'',
    //         phone:'',
    //         email:'',
    //         password:'',
    //         error:'',
    //         loading: false
    //     }
    // }

    // onChangeText = (namaState, value) => {
    //     this.setState = ({
    //         [namaState]: value
    //     })
    // }

    // onSubmit = () => {
    //     this.setState({error:'', loading:true})

    //     const{email, password} = this.state;
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then(() => {
    //         this.setState({error:'', loading:false});
    //         goToLogin();
    //     })
    //     .catch(() => {
    //         this.setState({error:'Authetication Failed', loading:false});
    //     })
    // }

     
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
                            <Input onChangeText={name => this.setState({name})} />
                        </Item>
                        <Item floatingLabel style={{width:250}}>
                            <Label style={{textAlign: 'left'}}>No. Phone</Label>
                            <Input onChangeText={this.onChangeText} value={this.state.phone} namaState="phone"/>
                        </Item>
                        <Item floatingLabel style={{width:250}}>
                            <Label style={{textAlign: 'left'}}>Email</Label>
                            <Input onChangeText={this.onChangeText} value={this.state.email} namaState="email"/>
                        </Item>
                        <Item floatingLabel style={{width:250}}>
                            
                            <Label style={{textAlign: 'left'}}>Password</Label>
                            <Input secureTextEntry={true}  onChangeText={this.onChangeText} value={this.state.password} namaState="password"/>
                           
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