import "./App.css";
import { Component } from "react";
import tasks from "./data/tasks.json";
import { TaskList } from "./components/TaskList/TaskList.jsx";
import { AddForm } from "./components/AddForm/AddForm.jsx";
import data from "./data/tasks.json";
import { nanoid } from "nanoid";
import { Title, Main } from "./App.js";
import { GlobalStyle } from "./GlobalStyles.js";

class App extends Component {
  state = {
    data: tasks,
    newTask: "",
  };

  addTask = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.children[1].firstElementChild.value);
    const text = e.currentTarget.children[1].firstElementChild.value;
    this.setState((prevState) => {
      return {
        data: [
          ...prevState.data,
          {
            id: nanoid(8),
            text: text,
          },
        ],
      };
    });
    e.target.reset();
  };

  deleteTask = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    console.log(e.currentTarget.parentElement.id);
    const id = e.currentTarget.parentElement.id;
    const task = this.state.data.find((task) => task.id === id);
    const index = this.state.data.indexOf(task);
    this.setState((prevState) => {
      return {
        data: prevState.data.filter((_, i) => i !== index),
      };
    });
  };

  render() {
    return (
      <Main className="App">
        <GlobalStyle />
        <Title>To Do Tasks</Title>
        <AddForm addTask={this.addTask} />
        <TaskList tasks={this.state.data} deleteTask={this.deleteTask} />
      </Main>
    );
  }
}

export default App;
