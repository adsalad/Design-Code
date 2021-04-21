import React from 'react'
import styled from 'styled-components'
import { Animated, TouchableOpacity, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MenuItem from './MenuItem';
import { connect } from 'react-redux'


//takes a piece of state from your store, and passes it into your component as "props"
function mapStateToProps(state) {
    return { action: state.action };
}

//we need to also map the state as a prop here as well in order to actually interact with the component
function mapDispatchToProps(dispatch) {
    return {
        //action creator passes in action to reducer
        closeMenu: () =>
            dispatch({
                type: "CLOSE_MENU"
            })
    };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {

    //first step is to set up state so that top is at screenheight (basically the bottom)
    state = {
        top: new Animated.Value(screenHeight)
    };

    //fifth, add what you want to happen to UI when component loads
    componentDidMount() {
        this.toggleMenu()
    }

    //if component updates, reinstate toggleMenu
    componentDidUpdate() {
        this.toggleMenu();
    }

    //this is where an animation based on an interaction happens
    toggleMenu = () => {
        if (this.props.action == "openMenu") {
            Animated.spring(this.state.top, {
                toValue: 0
            }).start();
        }
        if (this.props.action == "closeMenu") {
            Animated.spring(this.state.top, {
                toValue: screenHeight
            }).start();
        }
    };

    //second step is make an Animated Container to capture view
    render() {
        return (
            //fourth step is to apply state to animation
            <AnimatedContainer style={{ top: this.state.top }}>
                <Cover>
                    <Image source={require("../assets/background2.jpg")} />
                    <Title>Adam Salaymeh</Title>
                    <Subtitle>asalaymeh@uwo.ca</Subtitle>
                </Cover>
                <TouchableOpacity
                    onPress={this.props.closeMenu}
                    style={{
                        position: "absolute",
                        top: 120,
                        left: "50%",
                        marginLeft: -22,
                        zIndex: 1
                    }}
                >
                    <CloseView>
                        <Ionicons name="ios-close" size={44} color="#546bfb" />
                    </CloseView>
                </TouchableOpacity>
                <Content>
                    {items.map((item, index) => (
                        <MenuItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </Content>
            </AnimatedContainer >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
const Container = styled.View`
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

//third step is to add animation to what you want to encapsulate
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
    height: 142px;
    background: black;
    align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const Content = styled.View`
    height: ${screenHeight};
    background: #f0f3f5;
    padding: 50px
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;  
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`

const items = [
    {
        icon: "ios-settings",
        title: "Account",
        text: "settings"
    },
    {
        icon: "ios-card",
        title: "Billing",
        text: "payments"
    },
    {
        icon: "ios-compass",
        title: "Learn React",
        text: "start course"
    },
    {
        icon: "ios-exit",
        title: "Log out",
        text: "see you soon!"
    }
];


