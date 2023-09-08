import React from 'react'
import { View } from 'react-native'
import { Text, Button } from 'react-native-paper';


function SplashScreen() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text>Loading...</Text>
        </View>
    );
}


export default SplashScreen