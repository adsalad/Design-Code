import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      })
  };
}

class Avatar extends React.Component {
  state = {
    photo: ""
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=5&emotion[]=happiness", {
      headers: new Headers({
        "X-API-KEY": "AB229DB1-DB664EA1-A6ED173A-5265345D"
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({
          photo: response[0].photo,
        });

        this.props.updateName(response[0].name)
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;