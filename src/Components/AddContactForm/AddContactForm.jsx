import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./AddContactForm.module.scss";

class ContactForm extends Component {
  state = {
    contactName: "",
    contactNumber: "",
  };

  inputIdName = nanoid();
  inputIdNumber = nanoid();

  onFormSubmit = (event) => {
    event.preventDefault();
    const { contactName, contactNumber } = this.state;
    this.props.addContact(contactName, contactNumber);
    this.setState({ contactName: "", contactNumber: "" });
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { contactName, contactNumber } = this.state;

    return (
      <form className={styles.addContactForm} onSubmit={this.onFormSubmit}>
        <label htmlFor={this.inputIdName}>Full Name</label>
        <input
          type="text"
          id={this.inputIdName}
          name="contactName"
          value={contactName}
          onChange={this.onInputChange}
          required
        />

        <label htmlFor={this.inputIdNumber}>Phone</label>
        <input
          type="tel"
          id={this.inputIdNumber}
          name="contactNumber"
          value={contactNumber}
          onChange={this.onInputChange}
          required
        />

        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ContactForm;