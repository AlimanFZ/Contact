import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { searchIcon } from "../../assets";

const Search = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={searchIcon} style={styles.icon} />
        </TouchableOpacity>
    )
}

export default Search

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35
    }
})
