import React, { useEffect, useState } from 'react';
import {  ImageBackground, View, StyleSheet, ScrollView, Dimensions,Linking, TouchableOpacity  } from 'react-native';
import Yimage from "../assets/pngwing.png";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Card, Text, Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {ViewIcon, VideoIcon, StarIcon} from "../component/Icons";


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Header = (coin) => {
    return(
     <Text category='h6'>{coin.title}</Text>
      );
    }
  
    const Footer = (coin) => {
      
      const StarPrint = (coin) => {
        const Star= [];
          for(var i=0; i<Math.floor(coin.view_count/1000000); i++){
            Star.push(<StarIcon key={i}/>);
        }
        return Star;  
      };
      
      
      return(
        <View style={styles.videoInfo}>
          <View><Text><VideoIcon/>  {coin.channelTitle}</Text></View>
            <Text><ViewIcon/>  {Math.round(coin.view_count/10000)}만회 {StarPrint(coin)}</Text>
        </View>
         );   
        
      };
  
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
    <>
      <IconRegistry icons={EvaIconsPack} />
     <ApplicationProvider {...eva} theme={eva.light}>
      
       <App />
      </ApplicationProvider>
    </>
  );

  