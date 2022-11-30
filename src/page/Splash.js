import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { contactIcon } from "../assets";
import auth from "@react-native-firebase/auth"


const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 2000);
    }, [navigation])

    return (
        <View style={styles.b1}>
            <Image source={contactIcon} style={{ height: 200, width: 200 }} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    b1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
})