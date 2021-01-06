import React, {Component} from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';
import {connect} from 'react-redux';

const Iconplus = (props) => {
  return (
    <View>
      <Icon
        type={'FontAwesome5'}
        name="plus-circle"
        style={{marginRight: 10, color: '#229BD7'}}
        onPress={props.onButtonPlus}
      />
    </View>
  );
};


export default Iconplus;
