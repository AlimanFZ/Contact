import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { createIcon } from "../../assets";

const CreateUser = ({ onPress }) => {
    return (
        <View style={styles.create}>
            <TouchableOpacity style={styles.touch} onPress={onPress}>
                <Image source={createIcon} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default CreateUser

const styles = StyleSheet.create({
    create: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%',
    },
    icon: {
        width: 60,
        height: 60,
    },
    touch: {
        marginBottom: 40,
        marginRight: 40,
    }
})
