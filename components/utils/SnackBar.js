import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../redux/alert/alertSlice.js';

const SnackBar = () => {
    const alert = useSelector((state) => state.alertReducer);
    const dispatch = useDispatch();

    const closeSnackBar = () => {
        //setResultSnackBar({ ...resultSnackBar, open: false })
        dispatch(closeAlert())
    }

    return (
        <Snackbar
            visible={alert.open}
            onDismiss={closeSnackBar}
            action={{
                label: 'Close',
                onPress: () => {
                    console.log("undo pressed")
                },
            }}>
            {alert.msg}
        </Snackbar>
    );
};


export default SnackBar;