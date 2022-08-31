import React from 'react';
import { Button, View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen (navigation){
    return (
        <View style = {{flex: 1}}>
            <Button onClick={()=>navigation.navigate('Youtube')} title = "youtube"/>
        </View>
    );
};

export default HomeScreen;