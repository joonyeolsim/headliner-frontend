import React, { useEffect, useState } from 'react';
import {  ImageBackground, Image, ActivityIndicator, Text, View, StyleSheet, ScrollView } from 'react-native';
import Gimage from "./assets/google.png";
import { styles } from "./style/google/style";

export default function Google() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(()=>{
      fetch(`http://34.64.177.161:8000/trend/google`).then((response) =>
      response.json()).then((json) => {
        setCoins(json.body);
        setLoading(false);
      });
    },[])
    
    return (
      <View style={styles.container}>
       <View style={styles.city}>
        <ImageBackground source={Gimage}  >
              <View 
              style={styles.logo}>
              </View>
        </ImageBackground>
            <Text style={styles.cityName}>Google</Text> 
        </View>
  
        <ScrollView
        
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{flexGrow: 1}}>
          {
            coins.map((coin)=>
            <View key ={coin.rank} style={styles.day}>
                <Text style={styles.temp}>{coin.rank}  {coin.keyword}</Text>
                <View style={styles.back}>
                </View>
            </View>
            
            )
          }
        </ScrollView>
      </View>
    )}