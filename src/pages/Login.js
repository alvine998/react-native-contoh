import React, { Component } from 'react';
import {View,Alert,TouchableOpacity , ImageBackground, Text, Image, Button, StyleSheet, TextInput, Linking} from 'react-native';
// import bgimage from '../images/bg.jpg';
import {Item, Label, Input} from 'native-base';
import Headerin from '../components/Header';
import imgg from '../images/G.png';
import fb from '../images/fb.webp';
import { Actions } from 'react-native-router-flux';

    
class Loginlagi extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            error:'',
            loading: false
        }
    }

    _onPressButton() {

        Alert.alert('You tapped the button!')
    
      }
    
    render() { 
        const goToHome = () => {
            Actions.home()
        }
        const goToSignup = () => {
            Actions.regis()
        }
        return ( 
            <View style={{flex:1, alignItems:'center', justifyContent:'center', paddingBottom:100, backgroundColor:"#FFFFFF"}}>
                <Headerin/>
                <Text style={{textAlign: 'center', justifyContent: 'center', fontFamily:'Raleway-Bold'}}>LOGIN</Text>
                <Item floatingLabel style={{width:250}}>
                    <Label style={{textAlign: 'left'}}>Email/Phone Number</Label>
                    <Input onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        editable={true}
                        maxLength={40}
                        multiline={false}
                    />
                </Item>
                <Item floatingLabel style={{width:250}}>
                    <Label style={{textAlign: 'left'}}>Password</Label>
                    <Input 
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                        editable={true}
                        maxLength={40}
                        multiline={false}
                    />
                    
                </Item>
                
                <View style={styles.buttonContainer}>
                    <Button onPress={goToHome}
                    color={'green'} title='Submit'  />
                </View>
                <Text style={{textAlign: 'center', justifyContent: 'center'}}>OR</Text>
                <View style={styles.buttonContainerAlt}>
                    <TouchableOpacity>
                        <Image source={imgg} style={{width:40, height:40}}/>
                    </TouchableOpacity>
                    <Text>                        </Text>
                    <TouchableOpacity>
                        <Image source={fb} style={{width:40, height:40}}/>
                    </TouchableOpacity>
                </View>
                <Text>{"\n \n You Don't Have an Account ?"}</Text>
                <Text style={{color: 'blue'}} onPress={goToSignup}>Register Here</Text>
            </View>
            
            
         );
    }
}

const styles = StyleSheet.create({
    textInputContainerStart:{
        borderColor: 'gray',
         borderWidth: 1,
         borderRadius:10,
        alignItems: 'center',
         justifyContent:'center',
         textAlign:'center',
        width: 200,
         height: 35,
          padding:10,
           margin:20
    },
    textInputContainer:{
        borderColor: 'gray',
         borderWidth: 1,
         borderRadius:10,
         textAlign:'center',
        alignItems: 'center',
         justifyContent:'center',
        width: 200,
         height: 35
    },
    buttonContainer:{
        padding:20,
        marginTop:20
    },
    buttonContainerAlt: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
})

 
export default Loginlagi;