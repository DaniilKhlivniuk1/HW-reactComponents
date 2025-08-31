import { Component } from "react";
import { Buttons, Btn } from "./FeedbackOptions.js";

export class FeedbackOptions extends Component {
  render() {
    const { options, countFeedbackToState } = this.props;

    return (
      <Buttons>
        {options.map((option) => (
          <Btn
            key={option}
            id={`${option}-btn`}
            onClick={countFeedbackToState}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Btn>
        ))}
      </Buttons>
    );
  }
}