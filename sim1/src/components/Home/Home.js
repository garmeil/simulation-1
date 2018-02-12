import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <header className="App-header flex center">
          <img src="../../../../assets/logo.png" />Shelfie
        </header>
        <div className="flex column center">
          <PrimaryButton className="flex center" route="/bins/A">
            Shelf A
          </PrimaryButton>
          <PrimaryButton className="flex center" route="/bins/B">
            Shelf B
          </PrimaryButton>
          <PrimaryButton className="flex center" route="/bins/C">
            Shelf C
          </PrimaryButton>
          <PrimaryButton className="flex center" route="/bins/D">
            Shelf D
          </PrimaryButton>
        </div>
      </div>
    );
  }
}
