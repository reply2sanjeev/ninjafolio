import React, { Component } from "react";
import skill from "../skills/image/sa.gif"
export default class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
      <img src={skill}></img>
      </>
    );
  }
}
