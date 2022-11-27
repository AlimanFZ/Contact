import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { getDatabase, update, ref } from "firebase/database";
import app from "../firebase";
import Loading from "../component/Atom/Loading";


const Update = ({ navigation: { goBack }, route: { params } }) => {

  //! useState
  const [name, setName] = React.useState(params?.name);
  const [number, setNumber] = React.useState(params?.number);
  const [loading, setLoading] = React.useState(false);

  //! Update Data
  const onUpdate = () => {

    if (name === "" || number === "") {
      Alert.alert("Lengkapi Data Anda", "Seperti Nama dan Nomor")
      return true;
    }

    setLoading(true);
    const db = getDatabase(app);
    const updates = {};
    const newData = {
      id: params.id,
      name: name,
      number: number,
    };

    updates["/contact/" + params.id] = newData;

    update(ref(db), updates)
      .then(() => {
        setLoading(false);
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
          <Text style={styles.teks}>Nomor: </Text>
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
        <Button title="Update" onPress={() => onUpdate()} />
      </View>
      <Loading visible={loading} />
    </View>
  );
};

export default Update;

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
