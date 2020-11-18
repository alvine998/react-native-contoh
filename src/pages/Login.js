import React, { Component } from 'react';
import {View,Alert , ImageBackground, Text, Image, Button, StyleSheet, TextInput} from 'react-native';
// import bgimage from '../images/bg.jpg';
import Headerin from '../components/Header';

    
class Loginlagi extends Component {
    _onPressButton() {

        Alert.alert('You tapped the button!')
    
      }
    
    render() { 
        
        return ( 
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Headerin/>
                <Text style={{textAlign: 'center', justifyContent: 'center'}}>LOGIN</Text>
                <TextInput
                    placeholder={'Username'}
                    style={styles.textInputContainerStart}
                />
                <TextInput
                    placeholder={'Username'}
                    style={styles.textInputContainer}
                />
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton}
                    color={'green'} title='Submit'  />
                </View>
                
            </View>
            
            
         );
    }
}

const styles = StyleSheet.create({
    textInputContainerStart:{
        borderColor: 'gray',
         borderWidth: 1,
        alignItems: 'center',
         justifyContent:'center',
        width: 200,
         height: 35,
          padding:10,
           margin:20
    },
    textInputContainer:{
        borderColor: 'gray',
         borderWidth: 1,
        alignItems: 'center',
         justifyContent:'center',
        width: 200,
         height: 35
    },
    buttonContainer:{
        padding:20,
        marginTop:20
    }
})

 
export default Loginlagi;