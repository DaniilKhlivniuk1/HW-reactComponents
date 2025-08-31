import { Component } from "react";

import { Statistics } from "../Statistics/Statistics.jsx";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions.jsx";
import { Notification } from "../Notification/Notification.jsx";
import { Title } from "./Section.js";

export class Section extends Component {
  render() {
    return (
      <section>
        <Title>{this.props.title}</Title>
        <FeedbackOptions
          countFeedbackToState={this.props.countFeedbackToState}
        />
        {!this.props.total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.props.good}
            neutral={this.props.neutral}
            bad={this.props.bad}
            total={this.props.total}
            positivePercentage={this.props.positivePercentage}
          />
        )}
      </section>
    );
  }
}
