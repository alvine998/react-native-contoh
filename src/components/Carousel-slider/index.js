import {Card} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Carousel from 'react-native-carousel-control';
import {View} from 'react-native';

const Carrousel = () => {
  return (
    <View>
      <Carousel>
        <Card style={styles.card}>
          <Text>Yuu</Text>
        </Card>
        <Card style={styles.card}></Card>
        <Card style={styles.card}></Card>
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
