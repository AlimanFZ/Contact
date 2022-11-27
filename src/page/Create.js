import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import app from "../firebase";
import { getDatabase, set, ref } from "firebase/database";
import "react-native-get-random-values";
import { nanoid } from "nanoid";


const Create = ({ navigation: { goBack } }) => {

  //! useState
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");

  //! ADD Data
  const add = () => {

    if (name === "" || number === "") {
      Alert.alert("Lengkapi Data Anda", "Seperti Nama dan Nomor")
      return true;
    }

    const id = nanoid();
    const db = getDatabase(app);

    set(ref(db, "contact/" + id), {
      id: id,
      name: name,
      number: number,
    })
      .then(() => {
        goBack();
      })
      .catch(() => {
        Alert.alert("Upps!! ada error dari server")
      });
  };


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.isicard}>
          <Text style={styles.teks}>Nomor:</Text>
          <Text style={styles.teks}>Nama : </Text>
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="masukan nomor"
            value={number}
            onChangeText={setNumber}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="masukan nama"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>
      <View style={styles.btn}>
        <Button title="Create" color="green" onPress={() => add()} />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    borderWidth: 1,
    marginTop: 50,
    marginBottom: 100,
    marginHorizontal: 20,
    height: 100,
    borderRadius: 10,
    flexDirection: "row",
  },
  isicard: {
    marginLeft: 20,
    marginTop: 20,
  },
  btn: {
    marginHorizontal: 50,
  },
  teks: {
    fontSize: 20,
  },
  input: {
    marginTop: 21,
  },
});
