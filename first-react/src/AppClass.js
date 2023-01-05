import React, { Component } from "react";
import BoxClass from "./BoxClass";
export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter2: 0,
      num: 1,
      value: 0,
    };
    console.log("constructor");
  }

  //한번에 만들고 한번에 업에디트함
  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
    console.log("increase function", this.state);
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.counter2);
    console.log("increase function", this.state);
  }
  render() {
    console.log("render");
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value} />}
      </div>
    );
  }
}
