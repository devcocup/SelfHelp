// React
import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

// Global Styles & Constants
import AppStyles from "../Lib/AppStyles";
import Constants from "../Lib/Constants";

// Assets
import Header from "../Components/Header";
import QuestionBox from "../Components/QuestionBox";
import AnswerBox from "../Components/AnswerBox";
import Button from "../Components/Button";

const { height, width } = Dimensions.get("window");
const { Paddings, Margins, FontSizes, Colors } = Constants;

const QuizHeadingContainer = ({ index }) => {
  return (
    <View style={[styles.headingContainer, AppStyles.center]}>
      <Text style={styles.titleText}>Scenario {index}</Text>
      <View style={styles.separateBar} />
      <Text style={styles.subTitleText}>
        {Constants.QuizLabels[index - 1].title}
      </Text>
    </View>
  );
};

export default class QuizScenarioScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizIndex: 1
    };
  }

  onContinue = navigation => {
    const { navigate } = navigation;

    if (this.state.quizIndex >= 5) {
      navigate("LearnScreen");
    } else {
      this.setState({
        quizIndex: this.state.quizIndex + 1
      });
    }
  };

  render() {
    const { onContinue } = this;
    const { navigation } = this.props;
    const { quizIndex } = this.state;

    return (
      <View style={AppStyles.mainContainer}>
        <Header type="Back" navigation={navigation} />
        <ScrollView
          ref={ref => (this._scrollView = ref)}
          onContentSizeChange={() => {
            this._scrollView.scrollTo({ y: 0 });
          }}
        >
          <QuizHeadingContainer index={quizIndex} />
          {Constants.QuizLabels.map((item, index) => {
            return (
              <View key={index} style={AppStyles.hCenter}>
                {index + 1 === quizIndex && (
                  <View style={styles.cardContainer}>
                    <QuestionBox content={item.question} />
                    {item.answers.map((cardItem, cardIndex) => {
                      return <AnswerBox key={cardIndex} content={cardItem} />;
                    })}
                  </View>
                )}
              </View>
            );
          })}
          <View style={[styles.buttonArea, AppStyles.hCenter]}>
            <Button
              label="Continue"
              bgColor="white"
              onPress={() => this.onContinue(navigation)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    height: height / 4,
    width,
    backgroundColor: "white"
  },

  titleText: {
    fontSize: FontSizes.quizTitleFS,
    fontWeight: "600",
    marginBottom: 10
  },

  separateBar: {
    height: 2,
    width: width - 60,
    backgroundColor: Colors.orange
  },

  subTitleText: {
    color: Colors.gray,
    fontSize: FontSizes.quizTitleFS,
    fontWeight: "600",
    marginTop: 10
  },

  cardContainer: {
    paddingTop: 20
  },

  buttonArea: {
    paddingTop: Paddings.containerP
  }
});
