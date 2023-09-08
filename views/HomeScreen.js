import React from 'react'
import {
    View,
    FlatList,
    SafeAreaView,
    StatusBar,
    ScrollView,
    StyleSheet,
} from 'react-native'
import {
    Text,
    Button,
    Card,
} from 'react-native-paper';
import { Image } from 'expo-image';
import Spacer from '../components/utils/Spacer';

function HomeScreen() {

    const data = [
        {
            id: 1,
            title: "Item 1",
            image: "https://i.pravatar.cc/150?img=1"
        },
        {
            id: 2,
            title: "Item 2",
            image: "https://i.pravatar.cc/150?img=2"
        },
        {
            id: 3,
            title: "Item 3",
            image: "https://i.pravatar.cc/150?img=3"
        },
        {
            id: 4,
            title: "Item 4",
            image: "https://i.pravatar.cc/150?img=4"
        },
        {
            id: 5,
            title: "Item 5",
            image: "https://i.pravatar.cc/150?img=5"
        },
    ]

    const categories = [
        {
            id: 1,
            title: "Category 1",
            image: "https://i.pravatar.cc/150?img=1"
        },
        {
            id: 2,
            title: "Category 2",
            image: "https://i.pravatar.cc/150?img=2"
        },
        {
            id: 3,
            title: "Category 3",
            image: "https://i.pravatar.cc/150?img=3"
        },
        {
            id: 4,
            title: "Category 4",
            image: "https://i.pravatar.cc/150?img=4"
        },
        {
            id: 5,
            title: "Category 5",
            image: "https://i.pravatar.cc/150?img=5"
        },
    ]
    const renderHorizontalItem = ({ item, index }) => {
        return (
            <View
                style={{
                    margin: 5,
                    marginLeft: index === 0 ? 10 : 5,
                }}
                contentStyle={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

                <Image
                    style={{
                        borderRadius: 10,
                        width: 80,
                        height: 80,
                    }}
                    source={item.image}
                    contentFit="contain"
                    transition={1000}
                />
                <View style={{
                    marginLeft: 5,
                    paddingVertical: 10,
                }}>
                    <Text>{item.title}</Text>
                </View>
            </View>
        );
    };

    return (
        <ScrollView>
            <View style={{
                marginTop: StatusBar.currentHeight + 80 || 0,
                marginHorizontal: 10,
            }}>
                <Text variant="displaySmall">Welcome Back!</Text>
            </View>
            <Spacer height={20} />
            <Text style={styles.homeHeader} variant="headlineSmall">Music</Text>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={renderHorizontalItem}
                keyExtractor={item => item.id}
            />
            <Spacer height={20} />
            <Text style={styles.homeHeader} variant="headlineSmall">Video</Text>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={renderHorizontalItem}
                keyExtractor={item => item.id}
            />
            <Spacer height={20} />
            <Text style={styles.homeHeader} variant="headlineSmall">Categories</Text>
            <View style={{
                marginHorizontal: 10,
            }}>
                <View style={styles.categoriesContainer}>
                    {categories.map((item, index) => (
                        <Card key={index} style={styles.cateriesItem} >
                            <Card.Content>
                                <Text>{item.title}</Text>
                            </Card.Content>
                        </Card>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    homeHeader: {
        marginLeft: 10,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    cateriesItem: {
        width: "49%",
        marginVertical: 5,
    }

});

export default HomeScreen