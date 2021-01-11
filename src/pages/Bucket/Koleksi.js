import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
  ListItem,
  Content,
  CheckBox,
  Button,
} from 'native-base';

import bgrnd from '../../images/bg-3.jpg';
import fantai from '../../images/bg-4.jpg';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native';
import {SafeAreaView} from 'react-native';

class Kolleksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCheckBox: false,
    };
  }
  render() {
    return (
      <ScrollView>
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
              Buat Koleksi
            </Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', height: responsiveHeight(20)}}>
              <View style={{margin: 20}}>
                <Text
                  style={{
                    fontFamily: 'BalooBhai-Regular',
                    fontSize: responsiveFontSize(2),
                    textAlign: 'center',
                    color: 'black',
                  }}>
                  Buat Koleksi Liburan
                </Text>
                <Text
                  style={{
                    fontFamily: 'BalooBhai-Regular',
                    fontSize: responsiveFontSize(2),
                    textAlign: 'left',
                    color: 'black',
                  }}>
                  Anda Sendiri
                </Text>
              </View>
              <Image
                source={bgrnd}
                style={{
                  height: responsiveHeight(15),
                  width: responsiveWidth(30),
                  marginLeft: 80,
                }}
              />
            </View>
            <ImageBackground
              source={fantai}
              style={{
                width: responsiveWidth(100),
                height: responsiveHeight(50),
              }}>
              <Icon
                type={'FontAwesome5'}
                name="camera"
                style={{
                  color: 'white',
                  marginTop: 350,
                  marginLeft: 30,
                  opacity: 0.7,
                }}
              />
              <Text style={[styles.text, {color: 'white', marginLeft:10}]}>Ganti Foto</Text>
            </ImageBackground>
            <View style={{margin: 20}}>
              <Text style={[styles.text, {fontSize: responsiveFontSize(2)}]}>
                Nama Koleksi :
              </Text>
              <TextInput
                placeholder="Cth: Liburan Keluarga"
                style={{
                  borderBottomWidth: 1,
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.text, {opacity: 0.5}]}>
                  Maks. 20 karakter
                </Text>
                <Text style={[styles.text, {opacity: 0.5, marginLeft: 250}]}>
                  0/20
                </Text>
              </View>

              <Text
                style={[
                  styles.text,
                  {fontSize: responsiveFontSize(2), marginTop: 20},
                ]}>
                Deskripsi :
              </Text>
              <TextInput
                placeholder="Keterangan..."
                style={{
                  borderBottomWidth: 1,
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.text, {opacity: 0.5}]}>
                  Maks. 250 karakter
                </Text>
                <Text style={[styles.text, {opacity: 0.5, marginLeft: 235}]}>
                  0/250
                </Text>
              </View>

              <Text
                style={[
                  styles.text,
                  {fontSize: responsiveFontSize(2), marginTop: 20},
                ]}>
                Pilih Kategori
              </Text>
              <View style={{flexDirection:'row'}}>
              <Content style={{borderWidth:1, width:responsiveWidth(35), borderRadius:20}}>
                <ListItem>
                  <Text style={styles.text}>Liburan</Text>
                  <CheckBox
                    style={{marginLeft: 20}}
                    disabled={false}
                    value={this.state.checked}
                    onValueChange={() =>
                      this.setState({checked: !this.state.checked})
                    }
                  />
                </ListItem>
                <ListItem>
                  <Text style={styles.text}>Bekerja</Text>
                  <CheckBox
                    style={{marginLeft: 20}}
                    disabled={false}
                    value={this.state.toggleCheckBox}
                    onValueChange={() =>
                      this.setState({
                        toggleCheckBox: !this.state.toggleCheckBox,
                      })
                    }
                  />
                </ListItem>
                <ListItem>
                  <Text style={styles.text}>Lain-lain</Text>
                  <CheckBox
                    style={{marginLeft: 13}}
                    disabled={false}
                    value={this.state.toggleCheckBox}
                    onValueChange={() =>
                      this.setState({
                        toggleCheckBox: !this.state.toggleCheckBox,
                      })
                    }
                  />
                </ListItem>
              </Content>
              <Button
                full
                rounded
                style={{
                  backgroundColor: '#229BD7',
                  width: responsiveWidth(30),
                  marginLeft: 180,
                  marginTop: 120
                }}>
                <Text
                  style={[
                    styles.text,
                    {color: 'white', fontSize: responsiveFontSize(2)},
                  ]}>
                  Simpan
                </Text>
              </Button>
              </View>
              
              
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'BalooBhai-Regular',
  },
});

export default Kolleksi;
