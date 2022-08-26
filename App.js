import Youtube from './Youtube'; 
import Google from './Google'; 
import { StyleSheet, Text, Button,View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1,
      alignItems: 'center',
      justifyContent: 'center'}}>
      <Button
        title="Go to Youtube"
        onPress={ () => navigation.navigate('Youtube')}
      />
      <Button
      
        title="Go to Google"
        onPress={ () => navigation.navigate('Google')}
      />
    </View>
  )
}

const Stack = createStackNavigator();

export default function App(){
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Youtube" component={Youtube}/>
        <Stack.Screen name="Google" component={Google}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0, }
})