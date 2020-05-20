import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from './src/screens/splash/Splash';
import Home from './src/screens/main/home/Home';
import Category from './src/screens/main/category/Category';
import Library from './src/screens/main/library/Library';
import Profile from './src/screens/main/profile/Profile';
import FictionBook from './src/screens/book/FictionBook';
import HisFictionBook from './src/screens/book/HisFictionBook';
import FictionAxios from './src/screens/book/FictionAxios';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FictionBook"
        component={FictionBook}
        options={{
          title: 'Thriller',
          headerStyle: {backgroundColor: 'blue'},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontSize: 17,
          },
        }}
      />
      <Stack.Screen
        name="HisFictionBook"
        component={HisFictionBook}
        options={{
          title: 'Historical Fiction',
          headerStyle: {backgroundColor: 'blue'},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontSize: 17,
          },
        }}
      />
      <Stack.Screen
        name="FictionAxios"
        component={FictionAxios}
        options={{
          title: 'Thriller',
          headerStyle: {backgroundColor: 'blue'},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontSize: 17,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Chart" component={Library} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
