import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { Ionicons } from "@expo/vector-icons"
import Course from "../component/Course";
import CoursesScreen from "../screens/CoursesScreen";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

//initial stack navigator
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen,

});

const CoursesStack = createStackNavigator({
  Courses: CoursesScreen
});


HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-home"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

CoursesStack.navigationOptions = {
  tabBarLabel: "Courses",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-folder"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,

});

export default TabNavigator;