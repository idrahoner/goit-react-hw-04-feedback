import PropTypes from 'prop-types';
import { capitalizeString } from 'utils';
import css from './Statistics.module.css';

export default function Statistics({ stats, total, positivePersentage }) {
  return (
    <div>
      {Object.entries(stats).map(([name, value]) => (
        <p key={name} className={css.statisticsItem}>
          {capitalizeString(name)}: {value}
        </p>
      ))}
      <p className={css.statisticsItem}>Total: {total}</p>
      <p className={css.statisticsItem}>Positive: {positivePersentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
};
