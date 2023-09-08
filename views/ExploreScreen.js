import React, { useEffect } from 'react'
import {
    SafeAreaView, View,
    StatusBar,
} from 'react-native'
import { Text, Button, Card, TouchableRipple } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import Spacer from '../components/utils/Spacer';
import { LinearGradient } from 'expo-linear-gradient';
import { selectPostById } from '../redux/posts/postsSlice';

function ExploreScreen({ navigation }) {

    const dispatch = useDispatch()

    const posts = useSelector(state => state.postsReducer.posts)
    const postsReducerStatus = useSelector(state => state.postsReducer.status)
    const postsReducerError = useSelector(state => state.postsReducer.error)

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <Text style={{
                marginTop: StatusBar.currentHeight + 20 || 0,
                marginHorizontal: 10,
            }} variant="displaySmall">Explore</Text>
            <Spacer height={20} />
            <View style={{
                margin: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                {posts.map((item, index) => (
                    <Card key={index} style={{
                        width: '49%',
                        marginBottom: 10,
                        height: 100,
                    }} onPress={() => navigation.navigate('ExploreDetails', {
                        id: item.id,
                        title: item.title
                    })}>
                        <LinearGradient
                            // Background Linear Gradient
                            colors={['#5C6BC0', '#1A237E']}
                            style={{
                                position: 'absolute',
                                width: "100%",
                                borderRadius: 10,
                                height: 100,
                            }}
                        />
                        <Text style={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            color: "white"
                        }}>{item.title}</Text>
                    </Card>
                ))}
            </View>
        </SafeAreaView>
    );
}

export default ExploreScreen