import PropTypes from 'prop-types';
import { capitalizeString } from 'utils';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={css.feedbackInterface}>
        {options.map(feedback => (
          <button
            key={feedback}
            type="button"
            onClick={() => onLeaveFeedback(feedback)}
            className={css.feedbackButton}
          >
            {capitalizeString(feedback)}
          </button>
        ))}
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.elementType,
};
