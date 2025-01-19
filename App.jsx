import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash Screen */}
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }}
        />

        {/* Bottom Tab Navigator after splash screen */}
        <Stack.Screen 
          name="Home" 
          component={BottomTabNavigator} 
          options={{ headerShown: false }}
        />

        {/* Movie Details Screen */}
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ headerShown: false }}  // Changed this line to hide header
        />

        {/* Search Screen */}
        <Stack.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{ title: 'Search Movies' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
