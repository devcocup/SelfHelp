//React
import React, { Component } from "react";
import {
	View,
	Text,
	Dimensions,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Image
} from "react-native";

const Menu = require('../Assets/Images/menu.png')

const { height, width } = Dimensions.get("window");

const heading1 = "Building Hope & Resiliency";
const label1 =
	"A self guided education program that helps you begin to recover and heal";

const heading2 = "What to do ";
const label2 =
	"Learn what to do if you or someone you know has been sexually assaulted.";

const Button = ({ text }) => {
	return (
		<TouchableOpacity>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const Card = ({ heading, label }) => {
	return (
		<TouchableOpacity style={styles.singleCardContainer}>
			<View style={styles.iconContainer}>
				<Text style={styles.icon}>Icon</Text>
			</View>
			<View style={styles.details}>
				<Text style={styles.headingTxt}>{heading}</Text>
				<Text style={styles.labelTxt}>{label}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default class LearnScreen extends Component {

    /*
    static navigationOptions = {      
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerLeft: <Text style={{ fontSize: 18, color: 'white', fontWeight: '600',marginLeft: 10 }}> Safe Helpline </Text>,
        headerRight: <Image source={Menu} style={{ marginRight: 10 }}/>
    } */

    static navigationOptions = {
        title: 'Plan Screen',
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerTitleStyle : {alignSelf:'flex-start'},
    }


	render() {
		return (
			<View style={{ backgroundColor: "#ededed", flex: 1 }}>
				<View style={{ height: height - 64, width }}>
					<View style={{ flex: 1 }}>
						<ScrollView>
							<View style={styles.headingContainer}>
								<Text style={styles.heading}>Learn</Text>
							</View>
							<View style={styles.cardContainer}>
								<Button text="Understanding Sexual Assault" />
								<Card heading={heading1} label={label1} />
								<Card heading={heading2} label={label2} />
								<Button text="Transitioning Service Member" />
								<Card heading={heading1} label={label1} />
								<Card heading={heading2} label={label2} />
								<Card heading={heading2} label={label2} />
								<Button text="Transitioning Service Member" />
								<Card heading={heading1} label={label1} />
								<Card heading={heading2} label={label2} />
							</View>
						</ScrollView>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headingContainer: {
		height: height / 4,
		width,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
	},
	heading: { fontSize: 30, fontWeight: "600" },
	cardContainer: {
		flex: 1,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#208167"
	},
	button: {
		height: height / 16,
		marginTop: 10,
		width: width - 20,
		backgroundColor: "#F7A553",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 4
	},
	singleCardContainer: {
		height: height / 7,
		marginTop: 10,
		width: width - 20,
		backgroundColor: "#2C8D77",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 4,
		flexDirection: "row",
		overflow: "hidden"
	},
	iconContainer: {
		height: height / 7,
		width: height / 7,
		alignItems: "center",
		justifyContent: "center"
	},
	details: {
		height: height / 7,
		width: width - height / 7 - 20,
		justifyContent: "center",
		padding: 10
	},
	buttonText: { color: "white", fontWeight: "600", fontSize: 18 },
	icon: { color: "white", fontWeight: "600", fontSize: 18 },
	headingTxt: { color: "white", fontWeight: "600", fontSize: 14 },
	labelTxt: { color: "white", fontWeight: "400", fontSize: 12, marginTop: 3 }
});

