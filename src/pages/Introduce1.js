import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {input, label} from 'mdbreact';
import logo from '../images/logo.png';

class Halaman1 extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container}>       
                <Image style={styles.imageContainer} source={logo}/>
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
        width:400,
        height:400,
        
    },
    textRow:{
        marginTop:200,
        justifyContent:'space-between',
        flexDirection:'row',
    }
})
 
export default Halaman1;