import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  ImageBackground, Image, ActivityIndicator, Text, View, StyleSheet, ScrollView, Dimensions,Linking, TouchableOpacity  } from 'react-native';
import Yimage from "./assets/pngwing.png";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch(`http://34.64.177.161:8000/trend/youtube`).then((response) =>
    response.json()).then((json) => {
      setCoins(json.body);
      setLoading(false);
    });
  },[])
  
  return (
    <View style={styles.container}>

      <View style={styles.city}>
      <ImageBackground source={Yimage}  >
            <View style={styles.logo}>
            </View>
      </ImageBackground>
          <Text style={styles.cityName}>YOUTUBE</Text> 
      </View>

      <ScrollView
        //pagingEnabled
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.weather}>
        {
          coins.map((coin)=>
          <TouchableOpacity key ={coin.id} style={styles.day} onPress={() =>
            Linking.openURL(coin.url)}>
            <Text style={styles.temp}>{coin.title}</Text>
            <ImageBackground source={{uri:coin.thumbnails.high.url}} >
              <View style={styles.back}>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          
          )
        }
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor : "white",
  },
  city:{
    marginTop:30,
    marginBottom:-30,
    height:100,
    justifyContent:"center",
    alignItems:"center",
    flexDirection: 'row'
  },
  cityName:{
    fontSize:48,
    fontWeight:"500",
  },
  weather:{
  },
  day:{
    width: SCREEN_WIDTH,
    alignItems:"center",
  },
  temp:{
    marginTop: 30,
    fontSize: 20,
  },
  description:{
    marginTop: -30,
    fontSize: 60,
  },
  tinyText:{
    fontSize:20,
  },
  back:{
    width: SCREEN_WIDTH,
    height : SCREEN_HEIGHT/3,
  },
  logo:{
    width: 50,
    height : 50,
  }
})
