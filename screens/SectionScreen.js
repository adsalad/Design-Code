import React from "react";
import styled from "styled-components";

class SectionScreen extends React.Component {

  render() {

    const section = this.props.navigation.getParam("section")

    return (
      <Container>
        <Cover>
          <Wrapper>
            <Logo source={section.logo}></Logo>
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Image source={section.image} />
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
  align-items: center
  justify-content: center
`;

const Image = styled.Image`
    height: 100%;
    width: 100%;
    position: absolute;
`;

const Title = styled.Text`
    color: white;
    width: 250px
    font-size: 30;
    font-weight: 600;
    z-index: 1
    text-shadow: 1px 1px #000000;
    margin-left: -130px
`;

const Wrapper = styled.View`
      flex-direction: row;
      position: absolute
      top: 30
      left: 20
      z-index: 1
`;

const Logo = styled.Image`
      width: 25px;
      height: 30px;
  `;

const Subtitle = styled.Text`
      font-size: 15px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      margin-left: 5px;
      text-transform: uppercase;
`;




