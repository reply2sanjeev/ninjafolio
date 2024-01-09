import React, { Component } from "react";
import skill from "../skills/image/pics.gif"
export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
      <img src={skill}></img>
      </>
    );
  }
}
