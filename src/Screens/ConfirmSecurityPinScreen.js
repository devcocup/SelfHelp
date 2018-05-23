// React
import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import localStorage from "react-native-sync-localstorage";

// Global Styles & Constants
import AppStyles from "../Lib/AppStyles";
import Constants from "../Lib/Constants";

// Assets
import SecurityPinHeader from "../Components/SecurityPinHeader";
import PinDots from "../Components/PinDots";

const { height, width } = Dimensions.get("window");
const { PanelLabels, Paddings, FontSizes, Colors, BorderRadii } = Constants;

export default class ConfirmSecurityPinScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      confirmingPin: "",
      mismatched: false,
      dotIndex: 0,
      headerText: "Confirm your pin"
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    const { pinNumber } = params;

    this.setState({
      confirmingPin: pinNumber
    });
  }

  goToScreen = (ScreenName, navigation) => {
    const { navigate } = navigation;
    navigate(ScreenName);
  };

  onNumberClicked = (label, index, navigation) => {
    const { confirmingPin } = this.state;
    let checkedPin = confirmingPin
      ? confirmingPin.substr(index, 1).includes(label)
        ? true
        : false
      : false;

    //modified by eli - 2018-05-23, to fix the issues for entering last number correctly.
    if (checkedPin) {
      this.setState({
        dotIndex: this.state.dotIndex + 1
      });

      if (this.state.dotIndex === 5) {
        this.setState({
          completed: true
        });
        localStorage.setItem("PIN", confirmingPin);
        this.goToScreen("CreateSecurityQuestionScreen", navigation);
      }
    } else {
      this.setState({
        mismatched: true,
        headerText: "Incorrect,\nplease try again."
      });
    }
  };

  render() {
    const { dotIndex, mismatched, headerText } = this.state;
    const { navigation } = this.props;

    return (
      <View style={AppStyles.mainContainer}>
        <SecurityPinHeader
          headerType="FLOW"
          flowIndex={2}
          navigation={navigation}
        />
        <View style={[styles.bodyContainer, AppStyles.hCenter]}>
          <View style={styles.headerTextArea}>
            <Text style={styles.headerText}>{headerText}</Text>
          </View>
          <View style={styles.dotArea}>
            <PinDots dotIndex={dotIndex} />
          </View>
          <View style={styles.panelArea}>
            {PanelLabels.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.panel, AppStyles.center]}
                  onPress={() =>
                    this.onNumberClicked(item, dotIndex, navigation)
                  }
                >
                  <Text style={styles.title}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1
  },
  headerTextArea: {
    height: 40,
    justifyContent: "flex-end"
  },

  headerText: {
    color: "white",
    fontSize: FontSizes.menuFS,
    fontWeight: "600",
    textAlign: "center"
  },

  title: {
    color: "white",
    fontSize: FontSizes.topicFS,
    fontWeight: "600"
  },

  dotArea: {
    width: width * 0.6,
    height: 60
  },

  panelArea: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginLeft: 20,
    paddingVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  panel: {
    width: width * 0.27,
    height: width * 0.27,
    borderRadius: BorderRadii.buttonBR,
    backgroundColor: Colors.darkGreen,
    marginRight: 5,
    marginBottom: 5,
  }
});
