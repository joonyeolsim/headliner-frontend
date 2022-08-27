import React, { useEffect, useState } from 'react';
import {  ImageBackground, Image, ActivityIndicator, View, StyleSheet, ScrollView, Dimensions,Linking, TouchableOpacity  } from 'react-native';
import Yimage from "./assets/pngwing.png";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Card, Text } from '@ui-kitten/components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Header = (coin) => {
  return(
   <Text>{coin.title}</Text>
);
  }

  const Footer = (coin) => (
      <Text>{coin.view_count}</Text>
  );

const App = () => {
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
          <Text style={styles.logoText} category='h1'>YOUTUBE</Text> 
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.weather}>
        {
          coins.map((coin)=>
            <Card key ={coin.id} style={styles.card} header={Header(coin)} footer={Footer(coin)}
              onPress={() => Linking.openURL(coin.url)}>
              <ImageBackground source={{uri:coin.thumbnails.high.url}} >
                <View style={styles.back}>
                </View>
              </ImageBackground>
            </Card>
          )
        }
      </ScrollView>

    </View>
  );
}

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);

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
  },
  card: {
    flex: 1,
    margin: 2,
  },
  logoText:{
    margin:2,
  }
})