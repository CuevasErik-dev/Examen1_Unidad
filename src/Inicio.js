import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Appbar, Card } from 'react-native-paper'
import Nabar1 from './components/Nabar1'

import Mycard from './components/Mycard'
import { SafeAreaView } from 'react-native-safe-area-context'



const Inicio = () => {
    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Usuario" />
            </Appbar.Header>

            <ScrollView >
                <Mycard
                    title={"Erik Cuevas"}
                    subtitle={"estudiante"}
                    icon={"folder"}
                />
                <Mycard
                    title={"Erik Cuevas"}
                    subtitle={"estudiante"}
                    icon={"account"}
                />
                <Mycard
                    title={"Erik Cuevas"}
                    subtitle={"estudiante"} 
                    icon={"heart"}
                    />
            </ScrollView>

            <Nabar1 />
        </SafeAreaView>
    )
}

export default Inicio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})