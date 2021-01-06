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

const HotelDuration = () => {
  const goToBack = () => {
    Actions.choose();
  };
  const [Duration, setDuration] = useState(1);
  return (
    <Container>
      <Header style={{backgroundColor: '#229BD7'}}>
        <Left>
          <Icon
            type={'FontAwesome5'}
            name="chevron-left"
            style={{color: '#FFF'}}
            onPress={goToBack}
          />
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
          <Iconminus onButtonMinus={() => setDuration(Duration - 1)} />
          <Durasi quantity={Duration} />
          <Iconplus onButtonPlus={() => setDuration(Duration + 1)} />
        </View>
      </View>
    </Container>
  );
};

export default HotelDuration;
