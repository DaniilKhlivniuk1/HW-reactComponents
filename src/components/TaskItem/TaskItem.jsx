import { ListItem, DeleteButton, Text } from "./TaskItem";

import { Component } from "react";

export class TaskItem extends Component {
  render() {
    return (
      <ListItem id={this.props.id}>
        <Text>{this.props.text}</Text>
        <DeleteButton type="button" onClick={this.props.deleteTask}>
          ✖
        </DeleteButton>
      </ListItem>
    );
  }
}
