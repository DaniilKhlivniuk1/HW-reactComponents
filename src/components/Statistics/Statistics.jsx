import { Component } from "react";

import { List, Title, Text, Span } from "./Statistics.js";

export class Statistics extends Component {
  render() {
    return (
      <section>
        <Title>Statistics</Title>
        <List>
          <li>
            <Text>
              Good: <Span>{this.props.good}</Span>
            </Text>
          </li>
          <li>
            <Text>
              Neutral: <Span>{this.props.neutral}</Span>
            </Text>
          </li>
          <li>
            <Text>
              Bad: <Span>{this.props.bad}</Span>
            </Text>
          </li>
          <li>
            <Text>
              Total: <Span>{this.props.total}</Span>
            </Text>
          </li>
          <li>
            <Text>
              Positive feedback: <Span>{this.props.positivePercentage}%</Span>
            </Text>
          </li>
        </List>
      </section>
    );
  }
}
