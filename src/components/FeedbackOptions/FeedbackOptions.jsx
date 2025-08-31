import { Component } from "react";
import { Buttons, Btn } from "./FeedbackOptions.js";

export class FeedbackOptions extends Component {
  render() {
    const options = ["good", "neutral", "bad"];

    return (
      <Buttons>
        {options.map(option => (
          <Btn
            key={option}
            id={`${option}-btn`}
            onClick={this.props.countFeedbackToState}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Btn>
        ))}
      </Buttons>
    );
  }
}