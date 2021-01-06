import React, {Component, useState} from 'react';
import {Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {
  Button,
  Drawer,
  Label,
  Left,
  Body,
  Right,
  Container,
  Icon,
  Header,
  Title,
  Content,
  View,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';


const Durasi = (props) => {
    return (
      <View style={{padding:10}}>
            <TextInput
              style={{borderBottomWidth: 1, width: 150, textAlign: 'center'}}
            //   value={props.quantity && String(props.quantity + ' Night')}
                value={String(props.Duration)}
              editable={false}
              style={{color:"black"}}
              
            />
        
      </View>
    );
  }



export default Durasi;
