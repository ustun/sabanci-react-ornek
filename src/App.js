import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// var isim = 'Sabanci'
var name = "Koc";
class UniversityView extends Component {
  render() {
    var name = this.props.name.toLowerCase();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {name}</h2>
        </div>
        <p className="App-intro" style={{ backgroundColor: this.props.color }}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = { selection: "" };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({ selection: event.target.value });
  }

  render() {
    var universities = [
      { name: "Bilkent", color: "blue" },
      { name: "Sabanci", color: "green" },
      { name: "Koc", color: "white" }
    ];

    var universityViewArray = [];

    for (var i = 0; i < universities.length; i++) {
      if (
        universities[i].name
          .toLowerCase()
          .startsWith(this.state.selection.toLowerCase())
      ) {
        universityViewArray.push(
          <UniversityView
            name={universities[i].name}
            color={universities[i].color}
          />
        );
      }
    }

    var additionalInfo;

    if (universityViewArray.length == 0) {
      additionalInfo = <div>No match</div>;
    } else {
      additionalInfo = <div>{universityViewArray.length} matches</div>;
    }
    return (
      <div>
        <input onChange={this.onChange} value={this.state.selection} />
        <span>{this.state.selection}</span>
        {universityViewArray}
        {additionalInfo}
      </div>
    );
  }
}

class CounterView extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };

    this.artir = this.artir.bind(this);
  }

  artir() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div>
        Bana {this.state.counter} kez tikladiniz.

        <button onClick={this.artir}>Artir</button>
      </div>
    );
  }
}

export default App;
