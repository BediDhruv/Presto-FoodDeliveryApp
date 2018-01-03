const RootScreen = require("./views/RootScreen");
// Screens of page: appScreens
const SplashScreen = require("./views/appScreens/SplashScreen");
const SelectMealScreen = require("./views/appScreens/SelectMeal");
const SelectMenuScreen = require("./views/appScreens/Menu");
const FinalScreen = require("./views/appScreens/Final");

const screens = {
	SplashScreen,
	SelectMealScreen,
	SelectMenuScreen,
	FinalScreen,
	RootScreen
};

const INIT_UI = "SplashScreen";

module.exports = {
	screens,
	INIT_UI
};
