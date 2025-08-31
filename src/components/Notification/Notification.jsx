import { Component } from "react";

import { Text } from "./Notification.js";

export class Notification extends Component {
  render() {
    return <Text>{this.props.message}</Text>;
  }
}
