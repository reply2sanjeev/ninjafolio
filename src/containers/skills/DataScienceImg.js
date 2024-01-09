import React, { Component } from "react";
import skillss from "../skills/image/Migrate.gif"
export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
     <>
     <img src={skillss}></img>
     </>
    );
  }
}
