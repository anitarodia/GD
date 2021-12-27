import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

function Login(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <Text style={styles.signInToGyaanDaan3}>Sign in to GyaanDaan</Text>
          <TextInput
            placeholder=" Enter Your Email"
            clearButtonMode="always"
            keyboardAppearance="dark"
            keyboardType="email-address"
            textBreakStrategy="highQuality"
            placeholderTextColor="rgba(255,255,255,1)"
            selectionColor="rgba(230, 230, 230,1)"
            style={styles.textInput}
          ></TextInput>
          <TextInput
            placeholder=" Password"
            clearButtonMode="always"
            keyboardAppearance="dark"
            keyboardType="default"
            textBreakStrategy="highQuality"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,1)"
            selectionColor="rgba(230, 230, 230,1)"
            style={styles.textInput1}
          ></TextInput>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
          <View style={styles.rect3}></View>
          <View style={styles.button2Stack}>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
            <Text style={styles.signInToGyaanDaan1}>
              Don&#39;t have a account? Sign up
            </Text>
          </View>
        </View>
        <Image
          source={require("../assets/images/logopng.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect2: {
    width: 779,
    height: 616,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 70,
    borderWidth: 5,
    borderColor: "rgba(49,123,211,1)",
    left: 0,
    bottom: 0
  },
  signInToGyaanDaan3: {
    height: 62,
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    lineHeight: 50,
    textAlign: "left",
    width: 325,
    marginTop: 89,
    marginLeft: 41
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    width: 217,
    height: 44,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 35,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 14,
    marginLeft: 95
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    width: 217,
    height: 44,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 35,
    marginTop: 27,
    marginLeft: 95
  },
  button: {
    width: 156,
    height: 47,
    backgroundColor: "#E6E6E6",
    borderRadius: 63,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 39,
    marginLeft: 295
  },
  next: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 30,
    marginTop: 2,
    marginLeft: 42
  },
  rect3: {
    width: 497,
    height: 4,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 104,
    marginLeft: 116
  },
  button2: {
    top: 17,
    left: 308,
    width: 110,
    height: 32,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  signInToGyaanDaan1: {
    top: 0,
    height: 62,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 28,
    lineHeight: 50,
    textAlign: "left",
    width: 489,
    left: 0
  },
  button2Stack: {
    width: 489,
    height: 62,
    marginTop: 2,
    marginLeft: 128
  },
  image1: {
    top: 0,
    width: 400,
    height: 367,
    position: "absolute",
    left: 373
  },
  rect2Stack: {
    width: 779,
    height: 634
  }
});

export default Login;
