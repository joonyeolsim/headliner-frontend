import { StyleSheet, Dimensions } from "react-native";


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
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
      logo:{
        width: 50,
        height : 50,
      },
      back:{
        width: SCREEN_WIDTH,
        height : SCREEN_HEIGHT/10,
      },
})