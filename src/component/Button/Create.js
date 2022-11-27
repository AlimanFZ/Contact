import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { createIcon } from "../../assets";

const Create = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={createIcon} style={styles.icon} />
        </TouchableOpacity>
    )
}

export default Create

const styles = StyleSheet.create({
    icon: {
        width: 65,
        height: 65
    }
})
