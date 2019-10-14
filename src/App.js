import React, { Component } from "react";
import Wrapper from "./components/wrapper";
import Statistic from "./components/statistic";
import Feedback from "./components/feedback";
import Container from "./components/container";
import Form from "./components/form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      data: [],
    };
  }
  handleClick = () => {
    if (this.state.message) {
      this.setState(
        prevState => ({ data: [...prevState.data, prevState.message] }),
        () => this.setState({ message: "" })
      );
    }
  };
  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };
 
  render() {
    const { data } = this.state;
    return (  
      <div id="App">
        <Wrapper />
        <Statistic />
        <Feedback />
        <Container data={data} />
        <Form
          message={this.state.message}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
