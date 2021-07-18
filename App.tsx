import React from 'react';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import Home from './screens/Home';
import Favorites from './screens/Favorites';
import UserSettings from './screens/UserSettings';
import OrdersHistory from './screens/OrdersHistory';
import SearchScreen from './screens/SearchScreen';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return(
    <HomeStack.Navigator 
      initialRouteName="home"
      mode="modal"
      headerMode="none"
    >
        <HomeStack.Screen name="home" component={Home}/>
        <HomeStack.Screen name="search" component={SearchScreen}/>
    </HomeStack.Navigator>
  )
}

export default function App() {

  return (
   <NavigationContainer>
      <Tab.Navigator
        
        initialRouteName="home"
        activeColor="#efeeee88"
        // inactiveColor="green"
        screenOptions={{
          tabBarLabel: "teste"
        }}
        
        barStyle={{
          backgroundColor: "#efeeee88",
          borderColor: "#efeeeeb0",
          borderWidth: 0,
          paddingBottom: 0,
          elevation: 0,
        }}
        sceneAnimationEnabled
      >
          <Tab.Screen 
            
              name="Home" 
              component={HomeStackScreen}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({focused}) => (
                  <>
                     {focused ? 
                        <Ionicons name="home" size={24} color="#FA4A0C"/> : 
                        <Ionicons name="home-outline" size={24} color="#ADADAF" />
                      }
                  </>
                )
              }}
          />
          <Tab.Screen 
              name="Favorites" 
              component={Favorites}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({focused}) => (
                  <>
                     {focused ? 
                        <MaterialIcons name="favorite" size={24} color="#FA4A0C"/> : 
                        <MaterialIcons name="favorite-border" size={24} color="#ADADAF" />
                      }
                  </>
                )
              }}
          />
          <Tab.Screen
              name="User Settings" 
              component={UserSettings}
              options={{

                tabBarLabel: "",
                tabBarIcon: ({focused}) => (
                  <>
                      {focused ? 
                        <MaterialIcons name="person" size={24} color="#FA4A0C" style={{borderRadius: 150}}/> : 
                        <MaterialIcons name="person-outline" size={24} color="#ADADAF" style={{borderRadius: 150}}/>
                      }
                  </>
                )
              }}
          />
          <Tab.Screen 
              name="Orders History" 
              component={OrdersHistory}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({focused}) => (
                  <MaterialIcons name="history" size={24} color={focused ? "#FA4A0C" : "#ADADAF"}/>
                )
              }} 
          />
      </Tab.Navigator>
   </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efeeeeb0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
