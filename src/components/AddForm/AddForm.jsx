import { Form, Label, Input, Button, Title } from "./AddForm.js";

import { Component } from "react";

export class AddForm extends Component {
  state = { value: "" };
  render() {
    return (
      <Form id="form-add" onSubmit={this.props.addTask}>
        <Title>Create to do task</Title>
        <Label>
          Your to do
          <Input type="text" name="todo" id="todo-input" required />
        </Label>
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}
