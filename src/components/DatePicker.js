import { now } from 'moment';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
 
function disablePastDates(startDate) {
    const startSeconds = Date.parse(startDate);
    return (date) => {
        return Date.parse(date) < startSeconds;
    }
}

export default class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: new Date().getDate(),
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date) {
      this.setState ({
          selectedStartDate : date,
      });
  }

  
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker
          disabledDates={disablePastDates(startDate)}
          onDateChange={this.onDateChange}
        />
 
        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
});