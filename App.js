import  AppLoading  from 'expo-app-loading';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Screen/Main';
import Home from './Screen/Home';
import Header from './Shared/Header';
import TabNavigation from './navigation/TopBarNavigation';
import ChatBot from './Screen/ChatBot';
import CourseDetails from './Screen/CourseDetails';
import Header2 from './Shared/Header2';
const Stack = createNativeStackNavigator();

const getFonts = () => Font.loadAsync({ //function for custom Fonts
  'Oswald-Bold': require('./assets/Fonts/Oswald-Bold.ttf'),
  'Oswald-Regular': require('./assets/Fonts/Oswald-Regular.ttf')
});

export default function App() {
const [fontsLoaded, setFontsLoaded] = useState(false);

if(fontsLoaded){
  return (
   <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen component={Main} name="Main" options={{headerShown:false}}/>
      <Stack.Screen component={TabNavigation} name="Home" options={{headerTitle: () => <Header/>, headerBackVisible:false}}/>
      <Stack.Screen component={ChatBot} name="Kanzi" options={{headerTitle: () => <Header2/>}}/>
      <Stack.Screen component={CourseDetails} name="Course Details"/>
     </Stack.Navigator>
   </NavigationContainer>
     
   
  );
} else {
 return(
  <AppLoading 
  startAsync={getFonts}
  onFinish={() => setFontsLoaded(true)}
  onError={console.warn}
/>
 )
}
}
