//React
import React, { Component } from "react";
import { View, WebView, StyleSheet, Dimensions } from "react-native";

// Global Styles & Constants
import AppStyles from "../Lib/AppStyles";

// Assets
import Header from "../Components/Header";

export default class ChatScreen extends Component {
  static navigationOptions = {
    title: "Chat Screen",
    headerStyle: { backgroundColor: "rgb(0,143,120)" },
    headerTintColor: "white",
    headerTitleStyle: { alignSelf: "flex-start" }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { navigation } = nextProps;
    if (navigation && navigation.state && navigation.state.params) {
      const { chatType } = navigation.state.params;
      if (chatType) {
        return { ...prevState, chatType };
      }
    }
    return null;
  }

  state = { chatType: null };

  render() {

    // *************** KNOWN REACT-NATIVE ISSUE: *********************
    // WebView fails to load certain URLs (seemingly randomly) in emulator;
    // debug in emulator browser or on native device.
    // See https://github.com/facebook/react-native/issues/14754.
    // *************** KNOWN REACT-NATIVE ISSUE: *********************

    const uri =
      this.state.chatType === "OneOnOne"
        ? "https://hotline.safehelpline.org/m/"
        : "https://safe-helproom.safehelpline.org/#/";

    const { navigation } = this.props;

    return (
      <View style={AppStyles.mainContainer}>
        <Header type="Back" navigation={navigation} />
        <WebView
          source={{ uri }}
          scalesPageToFit
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          mixedContentMode="always"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
