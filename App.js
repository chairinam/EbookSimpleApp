import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from './screens/splash/Splash';
import Home from './screens/main/home/Home';
import Category from './screens/main/category/Category';
import Library from './screens/main/library/Library';
import Profile from './screens/main/profile/Profile';
import FictionBook from './screens/book/FictionBook';
import HisFictionBook from './screens/book/HisFictionBook';
import FictionAxios from './screens/book/FictionAxios';

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
      {/* <MyTabs/> */}
    </NavigationContainer>
  );
}
