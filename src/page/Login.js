import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
    // Login Auth Google Firebase
    return (
        <View style={styles.b1}>
            <Button
                title="LOGIN WITH GOOGLE"
                onPress={() => { navigation.navigate("Home") }}
            />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    b1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
})