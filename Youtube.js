import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  ImageBackground, Image, ActivityIndicator, Text, View, StyleSheet, ScrollView } from 'react-native';
import Yimage from "./assets/pngwing.png";
import { styles } from "./style/youtube/style";

export default function Youtube() {
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
            <View key ={coin.id} style={styles.day}>
              <Text style={styles.temp}>{coin.title}</Text>
              <ImageBackground source={{uri:coin.thumbnails.high.url}} >
                <View style={styles.back}>
                </View>
              </ImageBackground>
            </View>
          
            )
          }
        </ScrollView>
      </View>
    )}