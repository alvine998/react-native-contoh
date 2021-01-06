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
import Durasi from '../../../components/Duration';
import Iconplus from '../../../components/IconPlus';
import Iconminus from '../../../components/IconMin';
import {connect} from 'react-redux';
import ActionType from '../../../redux/reducer/globalActionType';


const HotelDuration = (props) => {
  const goToBack = () => {
    Actions.choose();
  };

//   function validasi(){
//       if(Duration < 1 || Duration == ""){
//         setDuration(Duration)
//       } else{
//         props.handleMinus
//       }

//   }

//   const [Duration, setDuration] = useState(1);
  return (
    <Container>
      <Header style={{backgroundColor: '#229BD7'}}>
        <Left>
          
        </Left>
        <Body>
          <Title>Stay Duration</Title>
        </Body>
        <Right>
          <Icon
            type={'FontAwesome5'}
            name="check"
            style={{color: '#FFF'}}
            onPress={goToBack}
            value={props.Duration}
          />
        </Right>
      </Header>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            height: 80,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Iconminus onButtonMinus={props.handleMinus} />
          <Durasi Duration={props.Duration + ' Night'} />
          <Iconplus onButtonPlus={props.handlePlus} />
        </View>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => {
    return{
        Duration: state.totalDuration
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handlePlus: () => dispatch({type: ActionType.PLUS}),
        handleMinus: () => dispatch({type:  ActionType.MINUS})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelDuration);
