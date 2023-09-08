import React from 'react'
import { View } from "react-native"

const Stack = ({ direction = "column", spacing, children }) => {
    return (
        <View style={{
            flexDirection: direction,
            rowGap: spacing,
            columnGap: spacing,
        }}>{children}</View>
    )
}

export default Stack