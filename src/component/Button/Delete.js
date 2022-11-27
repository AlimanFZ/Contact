import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { deleteIcon } from "../../assets";

const Delete = ({ onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Image source={deleteIcon} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default Delete

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35
    }
})
