import React from "react"
import styled from 'styled-components'

const Logo = props => (
    <Container>
        <Text> {props.text} </Text>
    </Container>
)

export default Logo

const Container = styled.View`
  padding: 12px 16px 12px;
  height: 60px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  flex-direction: row;
  align-items: center;
  margin: 0 8px;
`;

const Text = styled.Text`
    font-weight: bold;
    font-size: 17px;
`;