import React from 'react'
import styled from 'styled-components'

const Card = props => (
    <Container>
        <Cover>
            <Image source={props.image} />
            <Title>{props.title}</Title>
        </Cover>
        <Content>
            <Logo source={props.logo} />
            <Wrapper>
                <Caption>{props.caption}</Caption>
                <Subtitle>{props.subtitle}</Subtitle>
            </Wrapper>
        </Content>
    </Container>
);


export default Card

//this contains the logo, caption, and subtitle
const Content = styled.View`
    padding-left: 20px
    flex-direction: row
    align-items: center;
    height: 80px;
`;

//this is the logo
const Logo = styled.Image`
    width: 30px;
    height: 38px;
`;

const Caption = styled.Text`
    color: #3c4560;
    font-size: 18px
    font-weight: 600;

`;

const Subtitle = styled.Text`
    color: #b8bece;
    font-size: 12px
    font-weight: 600;
    text-transform: uppercase
    margin-top: 4px;
`;

/*
  wrapper overrides the flex row allignment for Subtitle and Caption
*/
const Wrapper = styled.View`
    margin-left: 10px;
`;

/*this is the whole box */
const Container = styled.View`
    background: white;
    width: 315px;
    height: 280px;
    border-radius: 14px;
    margin-left: 20px;
    margin-top: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0, 0.15)
`;

/*this is basicaly the container the image is in
  all overflow does is hide anything that exceeds Cover dimensions

  the image overrides the corner radius oddly, 
  which is why we redo the radii
*/
const Cover = styled.View`
    width: 100%; /*width is 315px like parents */
    height: 200px;
    border-top-left-radius: 14px; 
    border-top-right-radius: 14px; 
    overflow: hidden;

`;

//by making image absolute, we override overflow and allow text to appear
const Image = styled.Image`
    width: 100%; 
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

//Styled Components title
const Title = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    width: 170px;

`;





