import { StyleSheet, Dimensions, Platform } from "react-native";
import Constants from "./Constants";

const { height, width } = Dimensions.get("window");
const { Colors, Paddings } = Constants;

const AppStyles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center"
  },

  vCenter: {
    justifyContent: "center"
  },

  vEnd: {
    justifyContent: "flex-end"
  },

  hCenter: {
    alignItems: "center"
  },

  hEnd: {
    alignItems: "flex-end"
  },
  main: {
    flex: 1,
    backgroundColor: Colors.primaryBgColor
  },

  mainContainer: {
    // height: height,

    flex: 1,
    backgroundColor: Colors.primaryBgColor,
    ...Platform.select({
      ios: {
        paddingVertical: Paddings.containerP
      },
      android: {}
    })
  }
});

export default AppStyles;
