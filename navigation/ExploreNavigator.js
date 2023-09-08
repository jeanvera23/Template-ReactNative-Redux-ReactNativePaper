import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ExploreScreen from '../views/ExploreScreen';
import ExploreDetailsScreen from '../views/ExploreDetailsScreen';

const Stack = createStackNavigator();

const ExploreNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Explore" >
            <Stack.Screen name="Explore" component={ExploreScreen}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen name="ExploreDetails" component={ExploreDetailsScreen}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    )
}

export default ExploreNavigator