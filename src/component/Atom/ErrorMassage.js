import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { deleteIcon } from "../../assets";

const ErrorMassage = () => {
    return (
        <View style={styles.error}>
            <Image source={deleteIcon} style={styles.not} />
            <Text>Tidak Ada Koneksi Internet</Text>
        </View>
    )
}

export default ErrorMassage

const styles = StyleSheet.create({
    error: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    not: {
        width: 50,
        height: 50,
    }
})
