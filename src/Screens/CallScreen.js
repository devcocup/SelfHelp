//React
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform, PermissionsAndroid
} from "react-native";
import Communications from "react-native-communications";
import { NavigationActions } from "react-navigation";
import TwilioVoice from "react-native-twilio-programmable-voice";



// Global Styles & Constants
import AppStyles from "../Lib/AppStyles";
import Constants from "../Lib/Constants";

// Assets
import Header from "../Components/Header";
import CardWithImage from "../Components/CardWithImage";

const SpeakerIcon = require("../Assets/Images/speaker.png");
const PhoneIcon = require("../Assets/Images/phone.png");

const { height, width } = Dimensions.get("window");
const { Paddings, Margins, Colors, FontSizes, BorderRadii } = Constants;

const PLATFORM = Platform.OS;


const HeadingContainer = ({ status }) => {
  const titleText = "Internet Call";

  return (
    <View style={[styles.headingContainer, AppStyles.center]}>
      <Text style={styles.statusText}>{status}</Text>
      <View style={styles.separateBar} />
      <Text style={styles.titleText}>{titleText}</Text>
    </View>
  );
};


export default class CallScreen extends Component {
  static navigationOptions = {
    title: "Call Screen",
    headerStyle: { backgroundColor: "rgb(0,143,120)" },
    headerTintColor: "white",
    headerTitleStyle: { alignSelf: "flex-start" }
  };

  constructor(props) {
    super(props);
    this.state = {
      buttonActivated: false,
      statusText: "Initializing",
      isSpeakerDisabled: false,
      speakerText: "Enable Speaker Phone",
      twilioReady: false
    };

  }



  handleTwilioInit = async () => {
    const token = await this.getAccessTokenFromServer();
    const success = await TwilioVoice.initWithToken(token);
    if (success && PLATFORM === 'ios') {
      try {
        TwilioVoice.configureCallKit({
          appName: 'SelfHelpline'
        })
        TwilioVoice.connect({To: '+12674222609'})
        // this.setState((prevState) => ({ ...prevState, statusText: "Dialing"}))
      } catch (err) {
        console.log('Unable to init Twilio: ', err)
      }
    } else if (success && PLATFORM === 'android') {
      TwilioVoice.connect({To: '+18004444444'})
    }
  }

  componentDidMount = async () => {
    TwilioVoice.addEventListener("deviceReady", () =>
      this.setState(prevState => ({ ...prevState, twilioReady: true }))
    );
    TwilioVoice.addEventListener("deviceNotReady", (data) =>
      this.setState(prevState => ({ ...prevState, twilioReady: false, error: data }))
    );
    TwilioVoice.addEventListener('connectionDidConnect', (data) => {
      this.setState((prevState => ({...prevState, buttonActivated: true, statusText: "Connected" })))
    })
    TwilioVoice.addEventListener('connectionDidDisconnect', (data) => {
      this.setState((prevState => ({...prevState, buttonActivated: false, statusText: "Disconnected" })))
    })

    if (PLATFORM === 'android') {
      const microphonePermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO)
      if (!microphonePermission) {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, {
          title: 'DoD Safe Helpline',
          message: 'DoD Safe Helpline needs access to your microphone'
        })
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          this.handleTwilioInit();
        }
      } else {
        this.handleTwilioInit();
      }
    } else {
      this.handleTwilioInit();
    }

  };

  componentWillUnmount = () => {
    TwilioVoice.removeEventListener("deviceReady");
    TwilioVoice.removeEventListener("deviceNotReady");
    TwilioVoice.removeEventListener('connectionDidConnect')
    TwilioVoice.removeEventListener('connectionDidDisconnect')
    TwilioVoice.removeEventListener('callRejected')
  };

  // componentWillMount = async () => {
  //     const token = await this.getAccessTokenFromServer()
  //     console.log(token)
  //     const success = await TwilioVoice.initWithToken(token)
  //   console.log(success)
  // }

  // initialize the Programmable Voice SDK passing an access token obtained from the server.
  // Listen to deviceReady and deviceNotReady events to see whether the initialization succeeded.
  async initTelephony(accessToken) {
    try {
      const success = await TwilioVoice.initWithToken(accessToken);
      console.log(success);
      if (success) {
        console.log("Inside Success Function");
        this.setState({
          buttonActivated: true,
          statusText: "Initialized"
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  getTokenFinished() {
    return Promise.all(this.getAccessTokenFromServer);
  }

  getAccessTokenFromServer() {
    const url = "https://voip.safehelpline.org/connect-new.php";
    return fetch('https://voip.safehelpline.org/connect-new.php')
      .then(response => response.text())

      .catch(error => {
        console.log(error);
      });
  }

  enableSpeaker = () => {
    // const { buttonActivated } = this.state

    // if (buttonActivated) {
    //     this.setState({
    //         statusText: 'Connecting'
    //     })
    // }
    if (this.state.isSpeakerDisabled) {
      this.setState({
        isSpeakerDisabled: false,
        speakerText: "Enable Speaker Phone"
      });
      TwilioVoice.setSpeakerPhone(false)
    } else {
      TwilioVoice.setSpeakerPhone(true)
      this.setState({
        isSpeakerDisabled: true,
        speakerText: "Disable Speaker Phone"
      });
    }
  };

  handleDisconnect = () => {
    TwilioVoice.disconnect();
  }

  hangUpCall = navigation => {
    const { navigate } = navigation;
    console.log('Disconnecting ')
    TwilioVoice.disconnect();
    this.setState({
      statusText: "Canceled"
    });
  };

  render() {
    // const { enableSpeaker, hangUpCall } = this;
    const { navigation } = this.props;
    const { buttonActivated, statusText, speakerText } = this.state;
    console.log(this.state)

    return (
      <View style={AppStyles.mainContainer}>
        <Header type="Back" navigation={navigation} />
        <View style={AppStyles.hCenter}>
          <HeadingContainer status={statusText} />
          <View
            style={styles.container}
            pointerEvents={buttonActivated ? "auto" : "none"}
          >
            <CardWithImage
              cardImage={SpeakerIcon}
              text={speakerText}
              onPress={this.enableSpeaker}
            />

            <CardWithImage
              cardImage={PhoneIcon}
              text="Hang Up Call"
              bgColor={Colors.red}
              onPress={this.handleDisconnect}
            />

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // padding: Paddings.lP
  },

  headingContainer: {
    height: height / 4,
    width,
    backgroundColor: "white"
  },

  statusText: {
    fontSize: FontSizes.quizTitleFS,
    fontWeight: "600",
    marginBottom: 10,
    color: Colors.orange
  },

  separateBar: {
    height: 2,
    width: width - 160,
    backgroundColor: Colors.gray
  },

  titleText: {
    color: "black",
    fontSize: FontSizes.headingFS,
    fontWeight: "600",
    marginTop: 10
  },

  numberField: {
    width: width - 80,
    height: 40,
    borderRadius: BorderRadii.boxBR,
    backgroundColor: "white"
  },

  callButton: {
    width: width / 3,
    height: 50,
    backgroundColor: Colors.red,
    borderRadius: BorderRadii.buttonBR,
    marginTop: Margins.elementMT
  },

  callButtonText: {
    color: "white",
    fontSize: FontSizes.contentFS,
    fontWeight: "bold"
  }
});
