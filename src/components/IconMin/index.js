import React, {Component} from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';
import {connect} from 'react-redux';

const Iconminus = (props) => {
  return (
    <View>
      <Icon
        type={'FontAwesome5'}
        name="minus-circle"
        style={{marginRight: 10, color: '#229BD7'}}
        onPress={props.onButtonMinus}
      />
    </View>
  );
};

export default Iconminus;
