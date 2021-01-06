import {now} from 'moment';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Datepicker from '../../../components/DatePicker';
import {Header, Left, Body, Right, Icon,Title} from 'native-base';

export default class Schedulehotel extends Component {

  render() {
    const goToBack = () => {
      Actions.choose();
    };
    
    return (
      <View style={styles.container}>
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
        <Datepicker/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 0,
  },
});
