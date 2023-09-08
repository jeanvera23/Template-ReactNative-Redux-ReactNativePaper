import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetBackdrop
} from '@gorhom/bottom-sheet';

const CustomBottomSheetModal = ({ open, setOpen, children }) => {

    useEffect(() => {
        if (open) {
            handlePresentModalPress()
        } else {
            console.log("Closing...")
            bottomSheetModalRef.current?.dismiss();
        }
    }, [open])

    // ref
    const bottomSheetModalRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index) => {
        if (index <= 0) {
            setOpen(false)
        }
    }, []);

    // renders
    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={0}
                appearsOnIndex={1}
            />
        ),
        []
    );
    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={renderBackdrop}
            >
                {children}
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};

export default CustomBottomSheetModal;