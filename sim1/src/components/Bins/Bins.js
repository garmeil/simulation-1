import React from "react";

export default class Bins extends React.Component {
  constructor() {}

  render() {
    return (
      <div>
        <header>
          <header>
            <div className="App-header Shelved flex center">
              <img src="../../../../assets/logo.png" />
            </div>
            <div className="ShelfShelved">Shelf A</div>
          </header>
        </header>
        <img />
        <div className="InputFields">
          <p>Name</p>
          <p className="InputBox">hk</p>
          <p>Price</p>
          <p className="InputBox">$675.00</p>
        </div>
      </div>
    );
  }
}
