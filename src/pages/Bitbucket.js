import {
  Body,
  Header,
  Left,
  Title,
  Icon,
  Container,
  Right,
  Card,
  Content,
  Button,
} from 'native-base';
import React, {Component} from 'react';
import Buket from '../images/Baks.jpg';
import doto from '../images/todo.png';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-carousel-control';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

class Bucket extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#229BD7'}}>
          <Left>
            <Icon
              type={'FontAwesome5'}
              name="chevron-left"
              style={{color: 'white'}}
            />
          </Left>
          <Body>
            <Title style={{fontFamily: 'BalooBhai-Regular', fontSize: 20}}>
              Bucket List
            </Title>
          </Body>
          <Right />
        </Header>
        <Content style={{marginTop: 0}}>
          <Image
            source={Buket}
            style={{height: responsiveHeight(30), width: responsiveWidth(100)}}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                backgroundColor: '#dfdfdf',
                height: responsiveHeight(47),
                width: responsiveWidth(80),
                borderRadius: 20,
                alignItems: 'center',
              }}>
              <Image
                source={doto}
                style={{
                  width: responsiveWidth(40),
                  height: responsiveHeight(25),
                }}
              />
              <Text
                style={{
                  fontFamily: 'BalooBhai-Regular',
                  fontSize: responsiveFontSize(2.5),
                  textAlign: 'center',
                }}>
                Kamu Belum Memiliki Koleksi Yang Disimpan
              </Text>
              <View
                style={{
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: responsiveWidth(80),
                  borderTopColor: 'white',
                }}>
                <Text
                  style={{
                    fontFamily: 'BalooBhai-Regular',
                    fontSize: responsiveFontSize(2),
                    textAlign: 'center',
                    marginTop: 20,
                  }}>
                  Yuk buat rencana impian liburan kamu disini.
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Button
                full
                rounded
                style={{
                  width: responsiveWidth(50),
                  backgroundColor: '#229BD7',
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontFamily: 'BalooBhai-Regular',
                    fontSize: responsiveFontSize(2),
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  Buat Koleksi
                </Text>
              </Button>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Bucket;
