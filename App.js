import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './Screens/Main';
import { Profile } from './Screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name='Home' component={Main} options={{headerShown:false}} />
        <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}} />
      
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text></Text>
    //   <StatusBar style="auto" />
    //   <Main />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})