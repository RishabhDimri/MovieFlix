import React from 'react';
import { Platform, Dimensions, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStackNavigator from './MainStackNavigator';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#111',
          borderTopWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 95 : 70, // Increased height
          paddingHorizontal: width * 0.1,
          paddingBottom: Platform.OS === 'ios' ? 30 : 12, // Increased bottom padding
          paddingTop: 8,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        },
        tabBarActiveTintColor: '#E50914', // Netflix red
        tabBarInactiveTintColor: '#737373',
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
          fontWeight: '500',
          marginTop: 0, // Removed extra top margin
          marginBottom: Platform.OS === 'ios' ? 5 : 8, // Added bottom margin for label
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const iconSize = Platform.OS === 'ios' ? 26 : 24; // Correct size based on platform
        
          if (route.name === 'Home') {
            iconName = require('../assets/icons/home_24dp_E8EAED.png'); 
          } else if (route.name === 'Search') {
            iconName = require('../assets/icons/search_24dp_E8EAED.png');
          }
        
          return (
            <Image
              source={iconName}
              style={{
                width: iconSize,  // Custom image size
                height: iconSize,  // Custom image size
                marginBottom: 4,  // Space between icon and label
                transform: [{ scale: focused ? 1.1 : 1 }], // Scale icon on focus
              }}
            />
          );
        },
        
        tabBarItemStyle: {
          height: Platform.OS === 'ios' ? 60 : 50, // Increased item height
          paddingTop: Platform.OS === 'ios' ? 12 : 2, // Adjusted top padding
          paddingBottom: Platform.OS === 'ios' ? 8 : 4, // Added bottom padding
          justifyContent: 'center', // Center content vertically
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={MainStackNavigator} 
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarLabel: 'Search',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
