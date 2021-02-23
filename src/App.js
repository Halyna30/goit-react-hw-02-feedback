import React, { Component } from 'react';

import Section from './Component/Section/Section';
import FeedbackOptions from './Component/FeedbackOptions/FeedbackOptions';
import Statistics from './Component/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    if (event.target.innerHTML === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (event.target.innerHTML === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (event.target.innerHTML === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={5}
            positivePercentage={12}
          />
        </Section>
      </>
    );
  }
}
export default App;
