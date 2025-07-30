import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Start button click: show the ball
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // Key press event handler
  handleKeyDown(event) {
    if (event.keyCode === 39) { // ArrowRight
      this.setState(prevState => ({
        posi: prevState.posi + 5
      }));
    }
  }

  // Attach keydown event after mount
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Remove listener on unmount (cleanup)
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Render Start button or Ball
  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{
            left: this.state.posi + "px",
            position: "absolute"
          }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
