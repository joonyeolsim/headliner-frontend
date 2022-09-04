import { StyleSheet,Dimensions } from "react-native";

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
      borderWidth: 5,
      borderColor : "teal",
      borderRadius: 15,
    },
    logoText:{
      margin:2,
    },
    icon: {
      width: 5,
      height: 5,
    },
    videoInfo:{
      justifyContent: "space-evenly",
    }
  })
