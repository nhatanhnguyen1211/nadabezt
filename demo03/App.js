import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homescreen from './components/Homescreen'
import HelloScreen from './components/HelloScreen'
import FlatListScreen from './components/FlatListScreen'
import Lab3 from './components/Lab3'
import ImagesScreen from './components/ImagesScreen'
import ScrollViewScreen from './components/ScrollViewScreen'
import Login from './components/Login'
import Lab2 from './components/Lab2'
import ImageLab from './components/ImageLab'
import DetailScreen from './components/DetailScreen'
import FetchDataScreen from './components/FetchDataScreen'
import ButtonSceen from './components/ButtonSceen'
import AnimationScreen from './components/AnimationScreen'


const Stack = createStackNavigator()

const App = () =>  {
 
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName=''>
        <Stack.Screen
          name="Homescreen"
          component={Homescreen}
        />
        <Stack.Screen
          name="HelloScreen"
          component={HelloScreen}
          />
          <Stack.Screen
          name="FlatListScreen"
          component={FlatListScreen}
          />
           <Stack.Screen
          name="Lab3"
          component={Lab3}
          />
          <Stack.Screen
          name="ImagesScreen"
          component={ImagesScreen}
          />
          <Stack.Screen
          name="ScrollViewScreen"
          component={ScrollViewScreen}
          />
          <Stack.Screen
          name="Login"
          component={Login}
          />
          <Stack.Screen
          name="Lab2"
          component={Lab2}
          />
           <Stack.Screen
          name="ImageLab"
          component={ImageLab}
          />
           <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          />
           <Stack.Screen
          name="FetchDataScreen"
          component={FetchDataScreen}
          />
            <Stack.Screen
          name="ButtonSceen"
          component={ButtonSceen}
          />
           <Stack.Screen
          name="AnimationScreen"
          component={AnimationScreen}
          />
          
    </Stack.Navigator>
  </NavigationContainer>
  );
    
};



export default App;
