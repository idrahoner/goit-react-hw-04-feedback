import PropTypes from 'prop-types';
import { capitalizeString } from 'utils';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={css.feedbackInterface}>
        {options.map(element => (
          <button
            key={element}
            type="button"
            onClick={onLeaveFeedback}
            className={css.feedbackButton}
          >
            {capitalizeString(element)}
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
