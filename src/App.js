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
      this.setState(({ good }) => ({
        good: good + 1,
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

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%';

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
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
export default App;
