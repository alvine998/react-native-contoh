import { Icon, View } from 'native-base';
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';


class AndroidSearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <Icon name="search" size={25} style={{mar}} />
                <TextInput />
            </View>
         );
    }
}
 
export default AndroidSearchBar;