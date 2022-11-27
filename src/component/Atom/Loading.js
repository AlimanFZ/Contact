import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, Modal } from "react-native";

const Loading = ({ visible }) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.load}>
        <ActivityIndicator size={50} color="77DD00" />
        <Text>Loading...</Text>
      </View>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({
  load: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.30)",
    width: "100%",
    height: "100%",
  },
});
