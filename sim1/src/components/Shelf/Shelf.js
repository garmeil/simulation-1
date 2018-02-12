import React, { Component } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default class Shelf extends Component {
  constructor() {
    super();
  }
  render() {
    let currentPath = this.props.location.pathname;
    let currentBin = currentPath[currentPath.length - 1];

    return (
      <div>
        <header>
          <div className="App-header Shelved flex center">
            <img src="../../../../assets/logo.png" />
          </div>
          <div className="Shelf">Shelf A</div>
        </header>
        <div className="Bin-Container">
          <PrimaryButton route={`/bin/${currentBin}1`}>
            PlaceHolder
          </PrimaryButton>
          <PrimaryButton route={`/bin/${currentBin}1`}>
            PlaceHolder
          </PrimaryButton>
          <PrimaryButton route={`/bin/${currentBin}1`}>
            PlaceHolder
          </PrimaryButton>
          <PrimaryButton route={`/bin/${currentBin}1`}>
            PlaceHolder
          </PrimaryButton>
          <PrimaryButton route={`/bin/${currentBin}1`}>
            PlaceHolder
          </PrimaryButton>
          {console.log(this.props.location)}
        </div>
      </div>
    );
  }
}
