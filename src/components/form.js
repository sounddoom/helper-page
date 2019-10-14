import React from "react";

export default class Feedback extends React.Component {
  componentDidMount() {
    document.addEventListener("keypress", this.handleEnterPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleEnterPress);
  }

  handleEnterPress = event => {
    if (event.keyCode === 10) {
      this.props.handleClick();
    }
  };
  render() {
    const { message, handleChange, handleClick } = this.props;
    return (
      <div className="form">
        <input id="message" value={message} onChange={handleChange} />
        <button id="button" onClick={handleClick}>
          Написать консультанту
        </button>
      </div>
    );
  }
}
