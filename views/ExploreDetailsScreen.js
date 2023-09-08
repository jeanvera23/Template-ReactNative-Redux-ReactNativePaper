import React, { useState } from 'react'
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
    IconButton,
} from 'react-native-paper';

import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import BottomSheet from '@gorhom/bottom-sheet';
import CustomBottomSheetModal from '../components/utils/CustomBottomSheetModal';
import Stack from '../components/utils/Stack';

const ExploreDetailsScreen = ({ route, navigation }) => {

    const { id, title } = route.params;
    const [selectedId, setSelectedId] = useState();
    const [openBottomModal, setOpenBottomModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({
        title: ""
    });

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
        {
            id: 6,
            title: "Item 6",
            image: "https://i.pravatar.cc/150?img=6"
        },
        {
            id: 7,
            title: "Item 7",
            image: "https://i.pravatar.cc/150?img=7"
        },
        {
            id: 8,
            title: "Item 8",
            image: "https://i.pravatar.cc/150?img=8"
        },
        {
            id: 9,
            title: "Item 9",
            image: "https://i.pravatar.cc/150?img=9"
        }
    ]

    const renderItem = ({ item }) => {

        const onClickCard = () => {
            setSelectedItem(item)
            setOpenBottomModal(true)
        }

        return (
            <Card
                style={{
                    marginHorizontal: 10,
                    marginVertical: 5
                }}
                contentStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                onPress={onClickCard}
            >
                <Image
                    style={styles.leadingImage}
                    source={item.image}
                    contentFit="contain"
                    transition={1000}
                />
                <View style={styles.cardTitle}>
                    <Text>{item.title}</Text>
                </View>
            </Card>
        );
    };


    return (
        <View style={{
        }}>
            <FlatList
                ListHeaderComponent={() => (
                    <View style={{
                        height: 200,
                        position: 'relative',
                        marginBottom: 10,
                    }}>

                        <Image
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            source={"https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-825x465.jpg"}
                            contentFit="cover"
                        />
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.6)']}
                            style={{
                                position: 'absolute',
                                width: "100%",
                                height: "100%",
                            }}
                        />
                        <IconButton
                            style={styles.backButton}
                            iconColor={"white"}
                            icon="arrow-left"
                            size={25}
                            onPress={() => navigation.goBack()}
                        />
                        <Text style={styles.bigTitle} variant='displaySmall'>{title}</Text>
                    </View>
                )}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <CustomBottomSheetModal
                open={openBottomModal}
                setOpen={setOpenBottomModal}
            >
                <View style={styles.modalContainer}>
                    <Stack spacing={10}>
                        <Text variant='headlineMedium'>{selectedItem.title} 🎉</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Maecenas eleifend ultrices vulputate. Nulla id ullamcorper lectus,
                            et euismod ante. Phasellus eget nibh eget mauris fermentum interdum.
                            Nulla facilisis, orci et porttitor laoreet, velit massa mollis eros,
                            et vestibulum est massa vel felis. Donec vehicula fermentum purus vitae sagittis.
                            Suspendisse hendrerit malesuada nisl, vel volutpat quam finibus vitae.
                            Donec nec urna erat. Etiam convallis pulvinar velit eget tincidunt.
                            Curabitur vitae sapien non est tincidunt sollicitudin.
                            Nunc rutrum quis enim at faucibus
                        </Text>
                    </Stack>

                </View>
            </CustomBottomSheetModal>
        </View>
    );
}

const styles = StyleSheet.create({
    bigTitle: {
        flexGrow: 1,
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: "white"
    },
    backButton: {
        top: StatusBar.currentHeight + 60,
        position: 'absolute',
    },
    leadingImage: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 80,
        height: 80,
    },
    cardTitle: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 10,
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
});

export default ExploreDetailsScreen