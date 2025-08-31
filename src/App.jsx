import "./App.css";
import { Section } from "./components/Section/Section.jsx";
import { Component } from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Main } from "./App.js";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return Math.round(
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.bad)) *
          100
      );
    } else {
      return 0;
    }
  };

  countFeedbackToState = (e) => {
    if (e.target.id === "good-btn") {
      this.setState((prevState) => {
        return {
          good: prevState.good + 1,
        };
      });
    }
    if (e.target.id === "neutral-btn") {
      this.setState((prevState) => {
        return {
          neutral: prevState.neutral + 1,
        };
      });
    }
    if (e.target.id === "bad-btn") {
      this.setState((prevState) => {
        return {
          bad: prevState.bad + 1,
        };
      });
    }
  };

  render() {
    return (
      <Main>
        <GlobalStyle />
        <Section
          title={"Please leave feedbak"}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          countFeedbackToState={this.countFeedbackToState}
        />
      </Main>
    );
  }
}

export default App;
