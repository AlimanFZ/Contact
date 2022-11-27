import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { updateIcon } from "../../assets";

const Update = ({ onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} >
                <Image source={updateIcon} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default Update

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35
    }
})
