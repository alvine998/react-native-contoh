import {Card} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import Carousel from 'react-native-carousel-control';
import {View} from 'react-native';

// img wisata
import gwk from '../../images/wisata/gwk.png';
import gnd from '../../images/wisata/gandrung.jpg';
import kly from '../../images/wisata/klayar.jpg';

const Carrousel = () => {
  return (
    <View>
      <Carousel>
        <TouchableOpacity
          style={{width: responsiveWidth(80), borderRadius: 20}}>
          <ImageBackground
            source={gwk}
            style={{
              width: responsiveWidth(80),
              height: responsiveHeight(20),
              overflow: 'hidden',
              borderRadius: 20,
            }}>
            <Text
              style={[
                styles.font,
                {
                  color: 'white',
                  marginLeft: 10,
                  marginTop: 100,
                  fontSize: responsiveFontSize(2.2),
                },
              ]}>
              Garuda Wisnu Kencana
            </Text>
            <Text
              style={[
                styles.font,
                {
                  color: 'white',
                  marginLeft: 10,
                  fontSize: responsiveFontSize(1.5),
                },
              ]}>
              Bali
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(80),
            borderRadius: 20,
            marginLeft: 10,
          }}>
          <ImageBackground
            source={gnd}
            style={{
              width: responsiveWidth(80),
              height: responsiveHeight(20),
              overflow: 'hidden',
              borderRadius: 20,
            }}>
            <Text
              style={[
                styles.font,
                {
                  color: 'white',
                  marginLeft: 10,
                  marginTop: 100,
                  fontSize: responsiveFontSize(2.2),
                },
              ]}>
              Taman Terakota Gandrung
            </Text>
            <Text
              style={[
                styles.font,
                {
                  color: 'white',
                  marginLeft: 10,
                  fontSize: responsiveFontSize(1.5),
                },
              ]}>
              Banyuwangi
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: responsiveWidth(80), borderRadius: 20}}>
          <ImageBackground
            source={kly}
            style={{
              width: responsiveWidth(80),
              height: responsiveHeight(20),
              overflow: 'hidden',
              borderRadius: 20,
            }}>
            <Text
              style={[
                styles.font,
                {
                  color: 'white',
                  marginLeft: 10,
                  marginTop: 100,
                  fontSize: responsiveFontSize(2.2),
                },
              ]}>
              Pantai Klayar
            </Text>
            <Text
              style={[
                styles.font,
                {
                  color: 'white',
                  marginLeft: 10,
                  fontSize: responsiveFontSize(1.5),
                },
              ]}>
              Pacitan
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(80),
            borderRadius: 20,
            marginLeft: 10,
          }}>
          <ImageBackground
            source={gnd}
            blurRadius={10}
            style={{
              width: responsiveWidth(80),
              height: responsiveHeight(20),
              overflow: 'hidden',
              borderRadius: 20,
            }}>
            <Text
              style={[
                styles.font,
                {
                  color: 'white',
                  marginLeft: 10,
                  marginTop: 100,
                  fontSize: responsiveFontSize(2.2),
                },
              ]}>
              Lihat Wisata Lainnya
            </Text>
            <Text
              style={[
                styles.font,
                {
                  color: 'white',
                  marginLeft: 10,
                  fontSize: responsiveFontSize(1.5),
                },
              ]}>
              Tap Disini
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </Carousel>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: responsiveHeight(30),
    width: responsiveWidth(50),
  },
});

export default Carrousel;
