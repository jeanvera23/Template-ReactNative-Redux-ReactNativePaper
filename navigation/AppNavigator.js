import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { useDispatch, useSelector } from 'react-redux';
import * as SecureStore from 'expo-secure-store';

import SplashScreen from '../views/SplashScreen';
import LoginScreen from '../views/LoginScreen';
import BottomNavigator from './BottomNavigator';

import { restoreToken } from '../redux/auth/authSlice';
import { View } from 'react-native';

const Stack = createStackNavigator();


const AppNavigator = () => {
    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer)

    useEffect(() => {
        const getToken = async () => {
            let userToken;

            try {
                userToken = await SecureStore.getItemAsync('userToken');
                console.log("restoring token")
                console.log(userToken)
                dispatch(restoreToken(userToken))
            } catch (e) {
                // Restoring token failed
            }

        };

        getToken();
    }, [])

    if (authReducer.status == "idle") {
        // We haven't finished checking for the token yet
        return <SplashScreen />;
    }

    return (
        <Stack.Navigator initialRouteName="SplashScreen">
            {authReducer.userToken == null ? (
                // No token found, user isn't signed in
                <Stack.Screen
                    name="SignIn"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                        // When logging out, a pop animation feels intuitive
                        // You can remove this if you want the default 'push' animation
                        // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                    }}
                />
            ) : (
                // User is signed in
                <Stack.Screen name="BottomNavigator" component={BottomNavigator}
                    options={{
                        headerShown: false
                    }}
                />
            )}
        </Stack.Navigator>
    );
}

export default AppNavigator