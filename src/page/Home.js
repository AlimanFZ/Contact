import React from "react";
import { StyleSheet, View, FlatList, Alert, Text, Button } from "react-native";
import { UserContact, CreateUser, InsertContact } from "../component";
import { Loading, ErrorMassage } from "../component";
import { getDatabase, ref, onValue, update, query, orderByChild, startAt, endAt, } from "firebase/database";
import auth from '@react-native-firebase/auth';
import app from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {

  //! useState
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [errorMassage, setErrorMassage] = React.useState(false);
  const [findParams, setFindParams] = React.useState("");
  const [name, setName] = React.useState("")

  //! GET Data
  const getData = () => {
    setLoading(true);
    const db = getDatabase(app);
    const starCountRef = ref(db, "contact/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData(data);
      } else if (!data) {
        setErrorMassage(true)
      }
      setLoading(false);
    });
  };

  const signOutAccount = async () => {
    await auth().signOut()
    await AsyncStorage.clear()
    navigation.replace('Login')
  };

  //! Insert Data
  const onFind = () => {
    setLoading(true);
    const db = getDatabase(app);
    const starCountRef = query(
      ref(db, "contact/"),
      orderByChild("name"),
      startAt(`%${findParams}%`),
      endAt(`${findParams}\uf8ff`)
    );
    onValue(starCountRef, (snapshot) => {
      setLoading(false);
      const data = snapshot.val();
      if (data) {
        setData(data);
      } else if (!data) {
        Alert.alert("Data Yang Anda Cari", "Tidak Ada", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ])
      }
    });
  };

  //! Delete Data
  const onDelete = (id) => {
    setLoading(true);
    const db = getDatabase(app);
    const updates = {};
    updates["/contact/" + id] = null;
    console.log(updates);
    update(ref(db), updates).then(() => {
      setLoading(false);
    });
  };

  //! Asynchronus
  React.useEffect(() => {
    AsyncStorage.getItem('user').then(v => {
      let data = JSON.parse(v)
      setName(data.displayName)
    })
    getData();
  }, []);


  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{ `Welcome, ${name}` }</Text>
      </View>
      <View style={{ marginHorizontal: 25 }}>
        <Button title="LOGOUT" onPress={async () => { await signOutAccount() }} />
      </View>

      <View style={styles.search}>
        <InsertContact
          onPress={onFind}
          find={findParams}
          onFind={setFindParams}
        />
      </View>

      {data && (
        <FlatList
          keyExtractor={(i, index) => index.toString()}
          data={Object.values(data)}
          renderItem={({ item }) => (
            <UserContact
              nomor={item.number}
              nama={item.name}
              onDelete={() => onDelete(item.id)}
              onPress={() =>
                navigation.navigate("Update", {
                  name: item.name,
                  number: item.number,
                  id: item.id,
                })
              }
            />
          )}
        />
      )}

      <CreateUser onPress={() => navigation.navigate("Create")} />
      {loading && <Loading />}
      {errorMassage && <ErrorMassage />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  search: {
    borderBottomWidth: 1,
    height: 70,
    borderColor: "#B5B5B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
