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
    text: "CS 2212"
  },
  {
    text: "CAL 1301"
  },
  {
    text: "PSY 1000"
  },
  {
    text: "BIO 3391"
  }
];

const cards = [
  {
    title: "CS 2212: Software Engineering",
    image: require("../assets/background10.jpg"),
    subtitle: "Western University",
    caption: "1 of 12 Lectures Finished",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "CAL 1301: Calculus II",
    image: require("../assets/background12.jpg"),
    subtitle: "Western University",
    caption: "2 of 12 Lectures Finished",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "PSY 1000: Psychology",
    image: require("../assets/background13.jpg"),
    subtitle: "Western University",
    caption: "7 of 12 Lectures Finished",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "BIO 3391: Bioinformatics",
    image: require("../assets/background14.jpg"),
    subtitle: "Western University",
    caption: "5 of 12 Lectures Finished",
    logo: require("../assets/logo-react.png")
  }];


const courses = [
  {
    title: "CS2209: Computer Architecture",
    subtitle: "1.0 Course",
    image: require("../assets/orange.jpg"),
    logo: require("../assets/arm.png"),
    author: "Dr. El-Sakka",
    avatar: require("../assets/avatar.jpg"),
    caption: "Equip yourself with ARM programming"
  },

  {
    title: "CS2210: Data Structures & Algorithms",
    subtitle: "1.0 Course",
    image: require("../assets/blue.jpg"),
    logo: require("../assets/android.png"),
    author: "Dr. Solis-Oba",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn Stacks, Trees, Recursion & more!"
  },
  {
    title: "CS1026: Introduction to Programming",
    subtitle: "0.5 Course",
    image: require("../assets/green.jpg"),
    logo: require("../assets/python.png"),
    author: "Dr. Sanders",
    avatar: require("../assets/avatar.jpg"),
    caption:
      "Receive an introduction to the world of programming using Python!"
  }
];