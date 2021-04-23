import React from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing } from 'react-native';
import styled from 'styled-components';
import Card from '../component/Card';
import Course from '../component/Course';
import { NotificationIcon } from '../component/Icons';
import Logo from '../component/Logo';
import Menu from '../component/Menu';
import { connect } from "react-redux"
import Avatar from '../component/Avatar';


//takes a piece of state from your store, and passes it into your component as "props"
function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

//we need to also map the state as a prop here as well in order to actually interact with the component
function mapDispatchToProps(dispatch) {
  return {
    //action creator passes in action to reducer
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {

  navigationOptions = {
    headerMode: null
  }

  render() {
    return (
      <Container>

        <Menu />
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <TouchableOpacity onPress={this.props.openMenu} style={{ position: "absolute", top: 0, left: 20 }}
              >
                <Avatar />
              </TouchableOpacity>
              <Title>Welcome Back, </Title>
              <Name>{this.props.name}</Name>
              <NotificationIcon
                style={{ position: "absolute", right: 20, top: 5 }}
              />
            </TitleBar>
            <Subtitle>Favourites</Subtitle>
            <ScrollView
              style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}
              horizontal={true} showsHorizontalScrollIndicator={false}
            >
              {logos.map((logo, index) => (
                <Logo
                  key={index}
                  image={logo.image}
                  text={logo.text} />
              ))}
            </ScrollView>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
              {cards.map((card, index) => (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.push("Section", {
                      section: card
                    });
                  }}
                >
                  <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    subtitle={card.subtitle}
                    caption={card.caption}
                    logo={card.logo}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>

            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

//continue learning text goes here
const Subtitle = styled.Text`
  color: #b8bece;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

//app home screen background
const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;

`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;

`;

//contains Name and Title
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 75px;
`;

const logos = [
  {
    text: "Framer X"
  },
  {
    text: "Figma"
  },
  {
    text: "Studio"
  },
  {
    text: "React"
  },
  {
    text: "Swift"
  },
  {
    text: "Sketch"
  }
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("../assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("../assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Props and Icons",
    image: require("../assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Static Data and Loop",
    image: require("../assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("../assets/logo-react.png")
  }
];


const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool"
  }
];