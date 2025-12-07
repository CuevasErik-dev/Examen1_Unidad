import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const MyBoton = ({ icon, text }) => {
    return (
        <Button icon={icon} mode="contained"
            style={{ margin: 2 }}
            onPress={() => console.log('Pressed')}>
            {text}
        </Button>
    )
}

export default MyBoton