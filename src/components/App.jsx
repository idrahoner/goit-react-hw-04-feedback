import React from 'react';
import { useState } from 'react';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

const FEEDBACK_OPTIONS = ['good', 'neutral', 'bad'];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedbacks = good + neutral + bad;

  const positive = Math.round((good / totalFeedbacks) * 100);

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={FEEDBACK_OPTIONS}
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
