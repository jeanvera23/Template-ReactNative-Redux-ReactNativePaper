import React, { useEffect } from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import { Text, Button, List } from 'react-native-paper';
import { logout } from '../redux/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromStore } from '../utils/secureStorage'
import Spacer from '../components/utils/Spacer';

const AccountScreen = () => {

  const dispatch = useDispatch();

  const authReducer = useSelector((state) => state.authReducer)

  useEffect(() => {
    if (authReducer.userToken === null) {
      removeFromStore("userToken");
    }

  }, [authReducer.userToken])

  const onClickLogout = () => {
    console.log("Log out clicked")
    dispatch(logout())
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      marginVertical: 10
    }}>
      <View style={{ flexGrow: 1 }}>
        <Text style={{
          marginTop: StatusBar.currentHeight + 20 || 0,
          marginHorizontal: 10,
        }} variant="displaySmall">Account</Text>
        <Spacer height={20} />
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <List.Item
            key={index}
            title={"Item " + item}
            description="Item description"
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
        ))}
      </View>
      <View style={{
        margin: 10,
      }}>
        <Button mode="contained" onPress={onClickLogout} buttonColor="black">Log out</Button>
      </View>
    </SafeAreaView>
  )
}

export default AccountScreen