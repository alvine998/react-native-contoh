import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {View, Text, Image} from 'react-native';
import fantai from '../../images/bg-4.jpg';
import {Header, Left, Body, Right, Icon, Title} from 'native-base';
import {ImageBackground} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {StyleSheet} from 'react-native';
import Emp from '../../images/empty.jpg';
import daf from '../../images/daftarkan.png';
import add from '../../images/add.png';
import {TouchableOpacity} from 'react-native';

class VKoleksi extends Component {
  state = {};
  render() {
    return (
      <View>
        <ScrollView>
          <ImageBackground
            source={fantai}
            style={{
              width: responsiveWidth(100),
              height: responsiveHeight(50),
            }}>
            <Header transparent>
              <Left>
                <Icon
                  type={'FontAwesome5'}
                  name="chevron-left"
                  style={{color: 'white'}}
                />
              </Left>
              <Body>
                <Title style={{fontFamily: 'BalooBhai-Regular', fontSize: 20}}>
                  Koleksimu
                </Title>
              </Body>
              <Right />
            </Header>
          </ImageBackground>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                styles.font,
                {
                  fontSize: responsiveFontSize(4),
                  textAlign: 'center',
                  marginTop: 10,
                  color: '#229BD7',
                },
              ]}>
              Liburan di Bali
            </Text>
            <View style={{margin: 10, marginLeft: 30, marginRight: 30}}>
              <Text
                style={[
                  styles.font,
                  {fontSize: responsiveFontSize(2), textAlign: 'justify'},
                ]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    styles.font,
                    {fontSize: responsiveFontSize(2), marginTop: 20},
                  ]}>
                  Liburan
                </Text>
                <TouchableOpacity>
                  <Image
                    source={daf}
                    style={{
                      width: responsiveWidth(11),
                      height: responsiveHeight(7),
                      marginLeft: 230,
                    }}
                  />
                  <Text
                    style={[
                      styles.font,
                      {fontSize: responsiveFontSize(2), textAlign: 'right'},
                    ]}>
                    Ganti
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{borderBottomWidth: 1, width: responsiveWidth(90)}} />
            <Image
              source={Emp}
              style={{width: responsiveWidth(40), height: responsiveHeight(20)}}
            />
            <Text
              style={[
                styles.font,
                {fontSize: responsiveFontSize(2), textAlign: 'right'},
              ]}>
              Belum ada item tersimpan di koleksi ini
            </Text>
            <Text
              style={[
                styles.font,
                {
                  fontSize: responsiveFontSize(2),
                  textAlign: 'center',
                  color: '#dfdfdf',
                  margin: 10,
                },
              ]}>
              Pilih item yang kamu inginkan sebanyak yang kamu mau.
            </Text>
            <TouchableOpacity style={{paddingBottom: 10}}>
              <Image
                source={add}
                style={{
                  width: responsiveWidth(10),
                  height: responsiveHeight(5),
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    fontFamily: 'BalooBhai-Regular',
  },
});

export default VKoleksi;
