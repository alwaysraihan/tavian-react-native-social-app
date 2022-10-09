import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from './sideScreen/HomeScreen';
const Drawer = createDrawerNavigator();
const MainScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: true }} />
    </Drawer.Navigator>
  );
};

export default MainScreen;
