import React from 'react';
import { useState } from 'react';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = event => {
    const button = event.currentTarget.textContent.toLowerCase();

    switch (button) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return window.alert('Something went wrong!');
    }
  };

  const totalFeedbacks = good + neutral + bad;

  const positive = Math.round((good / totalFeedbacks) * 100);

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedbacks ? (
          <Statistics
            stats={{ good, neutral, bad }}
            total={totalFeedbacks}
            positivePersentage={positive}
          />
        ) : (
          <Notification message="No feedbacks given" />
        )}
      </Section>
    </>
  );
}
