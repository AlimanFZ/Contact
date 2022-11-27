import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import UpdateButton from "../Button/Update";
import DeleteButton from "../Button/Delete";

const UserContact = ({ onPress, nomor, nama, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.clas1}>
        <View style={styles.data}>
          <Text style={styles.noHP}>{nomor}</Text>
          <Text style={styles.nama}>{nama}</Text>
        </View>
        <View style={styles.button}>
          <UpdateButton onPress={onPress} />
          <DeleteButton onPress={onDelete} />
        </View>
      </View>
    </View>
  );
};

export default UserContact;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flexDirection: "row",
    borderColor: "#B5B5B5",
  },
  clas1: {
    marginHorizontal: 20,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    width: "25%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  data: {
    width: "75%",
  },
  noHP: {
    fontSize: 25,
  },
  nama: {
    fontSize: 20,
  },
});
