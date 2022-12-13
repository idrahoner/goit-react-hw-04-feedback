import React from 'react';
import PropTypes from 'prop-types';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export class App extends React.Component {
  static defaultProps = {
    initialValue: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  static propTypes = {
    initialValue: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number,
      bad: PropTypes.number,
    }),
  };

  state = {
    ...this.props.initialValue,
  };

  handleFeedback = event => {
    const wichState = event.target.textContent.toLowerCase();
    this.setState(prevState => ({ [wichState]: (prevState[wichState] += 1) }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, element) => (acc += element),
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = this.countTotalFeedback();
    return totalFeedbacks > 0
      ? Math.round((this.state.good / totalFeedbacks) * 100)
      : 0;
  };

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbacks ? (
            <Statistics
              stats={this.state}
              total={totalFeedbacks}
              positivePersentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedbacks given" />
          )}
        </Section>
      </>
    );
  }
}
