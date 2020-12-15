import {now} from 'moment';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {Actions} from 'react-native-router-flux';
import {Header, Left, Body, Right, Icon,Title} from 'native-base';

function disablePastDates(startDate) {
  const startSeconds = Date.parse(startDate);
  return (date) => {
    return Date.parse(date) < startSeconds;
  };
}

export default class Schedulehotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: new Date().getDate(),
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const goToBack = () => {
      Actions.choose();
    };
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
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
        <CalendarPicker
          disabledDates={disablePastDates(startDate)}
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED DATE:{startDate}</Text>
        </View>
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
