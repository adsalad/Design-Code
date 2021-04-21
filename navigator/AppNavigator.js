import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import TabNavigator from "./TabNavigator";

//old navigator
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen
});

export default createAppContainer(TabNavigator);