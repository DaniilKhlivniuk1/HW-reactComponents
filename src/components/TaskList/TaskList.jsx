import { List } from "./TaskList.js";

import { Component } from "react";
import { TaskItem } from "../TaskItem/TaskItem.jsx";

export class TaskList extends Component {
  render() {
    return (
      <List>
        {this.props.tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            deleteTask={this.props.deleteTask}
          />
        ))}
      </List>
    );
  }
}
