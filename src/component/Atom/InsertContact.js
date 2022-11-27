import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Search from "../Button/Search";

const InsertContact = ({ onPress, find, onFind }) => {
  return (
    <View style={styles.search}>
      <View style={styles.oval}>
        <TextInput
          style={styles.input}
          placeholder={"Insert"}
          value={find}
          onChangeText={onFind}
        />
      </View>
      <Search onPress={onPress} />
    </View>
  );
};

export default InsertContact;

const styles = StyleSheet.create({
  oval: {
    borderWidth: 1,
    height: 35,
    width: 250,
    borderRadius: 100,
    backgroundColor: "white",
    marginRight: 15,
  },
  input: {
    marginLeft: 20,
    marginTop: 1,
    fontSize: 20,
  },
  search: {
    flexDirection: "row",
  },
});
