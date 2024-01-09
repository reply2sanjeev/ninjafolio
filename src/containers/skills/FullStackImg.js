import React, { Component } from "react";
import skil from "../skills/image/DevOps.gif"
export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
      <img src={skil}></img>
      </>
    );
  }
}
