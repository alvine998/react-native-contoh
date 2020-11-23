import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';

export default class Searchbar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar 
        lightTheme={true} 
        round={true}
        style={{height:30}}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}