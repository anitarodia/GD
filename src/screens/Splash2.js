import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Login from "../components/Login";

function Splash2(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <Login style={styles.login}></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(36,45,55,1)",
    borderWidth: 30,
    borderColor: "rgba(36,45,55,1)",
    borderStyle: "solid"
  },
  login: {
    height: 634,
    width: 779,
    marginTop: 115,
    marginLeft: 280
  }
});

export default Splash2;
