import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons'

class SectionScreen extends React.Component {

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {

    const section = this.props.navigation.getParam("section")

    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
      </Container>
    );
  }
}

export default SectionScreen;


const Container = styled.View`
  flex: 1
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
    height: 100%;
    width: 100%;
    position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;

`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px
`;

const Wrapper = styled.View`
      flex-direction: row;
      position: absolute;
      top: 40px;
      left: 20px;
      align-items: center;
    `;

const Logo = styled.Image`
      width: 24px;
      height: 24px;
  `;

const Subtitle = styled.Text`
      font-size: 15px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      margin-left: 5px;
      text-transform: uppercase;
  `;




