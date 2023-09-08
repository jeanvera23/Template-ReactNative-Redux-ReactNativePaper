import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button, Text, TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import * as SecureStore from 'expo-secure-store';

import { login } from '../redux/auth/authSlice'
import { setAlert } from '../redux/alert/alertSlice';

import { config } from '../utils/config';
import Stack from '../components/utils/Stack';
import logo from '../assets/logo.svg';


const LoginScreen = () => {

  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false)

  const authReducer = useSelector((state) => state.authReducer)

  useEffect(() => {
    if (authReducer.userToken !== null) {
      save("userToken", authReducer.userToken);
    }

    if (authReducer.error !== null) {
      dispatch(setAlert({ open: true, message: authReducer.error }))
    }
  }, [authReducer.userToken, authReducer.error])

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  const onClickLogin = () => {
    dispatch(login({ email: credentials.email, password: credentials.password }))
  }

  const onChangeValue = (val) => {
    setCredentials({ ...credentials, ...val })
  }

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#d1d1d1', '#F5F5F8']}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={{ width: 300 }}>
        <Stack spacing={10}>
          <View style={{
            width: "100%",
            paddingBottom: 50,
          }}>
            <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={logo}
              placeholder={config.blurhash}
              contentFit="contain"
              transition={1000}
            />
          </View>
          <Text
            variant="titleLarge"
            style={{ textAlign: "center", paddingBottom: 20 }}
          >Login</Text>
          <TextInput
            mode='outlined'
            name="email"
            label="Email"
            value={credentials.email}
            onChangeText={text => onChangeValue({ email: text })}
          />
          <TextInput
            mode='outlined'
            secureTextEntry={showPassword ? false : true}
            label="Password"
            value={credentials.password}
            onChangeText={text => onChangeValue({ password: text })}
            right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
          />
          <Button
            loading={authReducer.status === "loading" ? true : false}
            mode="contained" onPress={onClickLogin}>
            {authReducer.status === "loading" ? "Loading" : "Login"}
          </Button>
        </Stack>
      </View>
    </LinearGradient>
  )
}


export default LoginScreen