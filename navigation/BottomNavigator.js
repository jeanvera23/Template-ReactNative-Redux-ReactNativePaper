import React, { useEffect } from 'react'
import { View } from 'react-native'
import { BottomNavigation, Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AccountScreen from '../views/AccountScreen';
import ExploreNavigator from './ExploreNavigator';
import HomeScreen from '../views/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName="HomeBottom">
                <Tab.Screen name="HomeBottom" component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="ExploreBottom"
                    component={ExploreNavigator}
                    options={{
                        tabBarLabel: 'Explore',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="compass" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="AccountBottom"
                    component={AccountScreen}
                    options={{
                        tabBarLabel: 'Account',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}

export default BottomNavigator