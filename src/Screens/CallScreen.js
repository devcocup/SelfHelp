//React
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform
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

// const AccessToken = require('twilio').jwt.AccessToken;
// const VoiceGrant = AccessToken.VoiceGrant

// Used when generating any kind of tokens
const twilioAccountSid = 'ACxxxxxxxxxx';
const twilioApiKey = 'SKxxxxxxxxxx';
const twilioApiSecret = 'xxxxxxxxxxxx';

// Used specifically for creating Voice tokens
const outgoingApplicationSid = 'APxxxxxxxxxxxxx';
const identity = 'user';

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

// TwilioVoice.addEventListener('deviceReady', () => {
//   console.log('Device Ready')
//   TwilioVoice.connect({To: '+18568737809'})
//
// })

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

  //test secret M1GALt9IMgzuYoufv7IaH3mMmdoDM5h2
  //test sid SK152291379e0c349fe5cd0be899f65fa6

  handleTwilioInit = async () => {
    const url = "https://voip.safehelpline.org/hello-client-monkey-twiml.php"
    console.log('In handleTwilioInit')
    if (PLATFORM === 'ios') {
      const token = await this.getAccessTokenFromServer();
      //const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJ0bVBKWGgxdXVuNkRKenk0SnpDSEJ0SHEzckJpbGtjeS0xNTI1OTAxOTM4IiwiaXNzIjoidG1QSlhoMXV1bjZESnp5NEp6Q0hCdEhxM3JCaWxrY3kiLCJzdWIiOiJBQ2E2ZDE1YzExZWViOWZmMDExY2U2NjNiNjE4OWUzMDcyIiwiZXhwIjoxNTI1OTA1NTM4LCJncmFudHMiOnsiaWRlbnRpdHkiOiJtb25rZXkiLCJ2b2ljZSI6eyJvdXRnb2luZyI6eyJhcHBsaWNhdGlvbl9zaWQiOiJBUDdlMWYzNzEyYjZjZmEwZDk1N2E2MGJlYjM5ZjNjNGM5In19fX0.TbOzgPhJmfupBcT57ymUjtPV3uE34M4q5RCSfU6Y1BU"
      console.log(token);
      const success = await TwilioVoice.initWithToken(token);
      console.log(success)

      try {
        console.log('initializing Twilio using ios callkit');
        TwilioVoice.configureCallKit({
          appName: 'SelfHelpline'
        })

      } catch (err) {
        console.log('Unable to init Twilio: ', err)
      }

      TwilioVoice.connect({To: '+18568737809'})

    }

  }

  componentDidMount = async () => {
    TwilioVoice.addEventListener("deviceReady", () =>
      this.setState(prevState => ({ ...prevState, twilioReady: true }))
    );
    TwilioVoice.addEventListener("deviceNotReady", (data) =>
      this.setState(prevState => ({ ...prevState, twilioReady: false, error: data }))
    );
    TwilioVoice.addEventListener('connectionDidConnect', (data) => console.log('Connection did connect', data))
    TwilioVoice.addEventListener('connectionDidDisconnect', (data) => console.log(data))
    TwilioVoice.addEventListener('callRejected', (value) => { console.log(value)})
    this.handleTwilioInit();




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
    } else {
      this.setState({
        isSpeakerDisabled: true,
        speakerText: "Disable Speaker Phone"
      });
    }
  };

  hangUpCall = navigation => {
    const { navigate } = navigation;
    TwilioVoice.disconnect();
    this.setState({
      statusText: "Canceled"
    });
  };

  render() {
    const { enableSpeaker, hangUpCall } = this;
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
              onPress={enableSpeaker}
            />
            <CardWithImage
              cardImage={PhoneIcon}
              text="Hang Up Call"
              bgColor={Colors.red}
              onPress={() => hangUpCall(navigation)}
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
