import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';

class HotelModal extends Component {
    state = {
        isModalVisible: false,
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible});
    };

    render() { 
        return ( 
            <View style={styles.viewModal}>
                <Image
                    source={{
                        uri:
                          'https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_960_720.png',
                      }}
                      style={styles.image}
                      resizeMode={'contain'}
                />
                <Text style={styles.textModal}>Done</Text>
                <Button title="Save" onPress={this.toggleModal} color="#41A8CC" />
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewModal: {
      width: 300,
      height: 400,
      backgroundColor: '#FFF',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    image: {
      width: 150,
      height: 150,
    },
    textModal: {
      marginVertical: 20,
    },
  });
 
export default HotelModal;