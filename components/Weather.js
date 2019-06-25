import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default class Weather extends Component{
  render(){
    return(
      <LinearGradient colors={["#00C6FB","#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Ionicons color="white"size={144} name="ios-rainy"/>
          <Text style={styles.temp}>30°C</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Rain like a MF Here!</Text>
          <Text style={styles.subtitle}>For more info look outside</Text>
        </View>
      </LinearGradient>
    );
  };
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  upper:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-end",
  },
  temp:{
    fontSize:50,
    color:'white',
    marginBottom:100,
  },
  lower:{
    flex:1,
    alignItems:"flex-start",
    justifyContent:"flex-end",
    paddingLeft:25,
  },
  title:{
    fontSize:38,
    color:'white',
  },
  subtitle:{
    fontSize:24,
    color:'white',
    marginBottom:100,
  }
})