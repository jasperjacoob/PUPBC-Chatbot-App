import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import About from '../Screen/About';
import Courses from '../Screen/Courses';
import Events from '../Screen/Events';
import Home from '../Screen/Home';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigation () {
    return (  
        <Tab.Navigator
            initialRouteName='Home2'
            screenOptions={{
                tabBarInactiveTintColor: 'gray',
                tabBarIndicatorStyle: {backgroundColor: 'maroon'},
                tabBarActiveTintColor: "maroon",
                tabBarLabelStyle: { fontSize: 11, fontWeight: "bold",},
                tabBarStyle: {backgroundColor: "white"},
            }}
        >
            <Tab.Screen 
            name="home2" 
            component={Home}
            options={{ tabBarLabel: "Home"}}
            />

            <Tab.Screen 
            name="Events" 
            component={Events}
            options={{ tabBarLabel: "Events"}}
            />

            <Tab.Screen 
            name="Courses" 
            component={Courses}
            options={{ tabBarLabel: "Courses"}}
            />

            <Tab.Screen 
            name="About" 
            component={About}
            options={{ tabBarLabel: "About"}}
            />

        </Tab.Navigator>
    );
}