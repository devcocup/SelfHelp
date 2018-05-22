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

// Global Styles & Constants
import AppStyles from "../Lib/AppStyles";
import Constants from "../Lib/Constants";

// Assets
import SecurityPinHeader from "../Components/SecurityPinHeader";
import Circle from "../Components/Circle";
import PinDots from "../Components/PinDots";

const { height, width } = Dimensions.get("window");
const { PanelLabels, Paddings, FontSizes, Colors, BorderRadii } = Constants;

export default class CreateSecurityPinScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pinNumber: ""
    };
  }

  componentDidUpdate = () => {
    if (this.state.pinNumber.length === 6) {
      this.goToScreen("ConfirmSecurityPinScreen", this.props.navigation);
    }
  };

  goToScreen = (ScreenName, navigation) => {
    const { navigate } = navigation;
    navigate(ScreenName, { pinNumber: this.state.pinNumber.substring(0, 6) });
  };

  onNumberClicked = label => {
    if (label === "Clear") {
      this.setState(() => ({ pinNumber: "" }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        pinNumber: prevState.pinNumber + label
      }));
    }
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={AppStyles.mainContainer}>
        <SecurityPinHeader
          headerType="FLOW"
          flowIndex={1}
          navigation={navigation}
        />
        <View style={[styles.bodyContainer, AppStyles.hCenter]}>
          <View style={styles.headerTextArea}>
            <Text style={styles.headerText}>Create a Security Pin</Text>
          </View>
          <Text style={styles.title}>We want this to be a safe place for you to add your thoughts. To protect your privacy please create a security pin.</Text>
          <View style={styles.dotArea}>
            <PinDots dotIndex={this.state.pinNumber.length} />
          </View>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <View style={styles.panelArea}>
              {PanelLabels.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[styles.panel, AppStyles.center]}
                    onPress={() => this.onNumberClicked(item)}
                  >
                    <Text style={styles.title}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
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

  headerNoticeText: {
    color: "white",
    fontSize: FontSizes.pinContentFS,
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
