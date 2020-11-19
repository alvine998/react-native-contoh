import React, { Component, Fragment } from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Headerin from '../components/Header';
import car from '../images/cart.png';

class Halaman23 extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container}>
                <Image source={car} style={styles.imageContainer}/>
                <Text style={{textAlign:'center'}}>BUKAN PLATFORM BIASA</Text>
                <Text style={{textAlign:'center'}}>Cari Penginapan Terbaik {"\n"} Kapanpun dan Dimanapun</Text>
                <View style={styles.textRow}>
                    <Text>Skip</Text>
                    <Text>                                                                        </Text>
                    <Text>Next</Text>
                </View>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    imageContainer:{
        marginTop:200,
        width:300,
        height:200,
        
    },
    textRow:{
        marginTop:200,
        justifyContent:'space-between',
        flexDirection:'row',
    }
})
 
export default Halaman23;