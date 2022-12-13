import PropTypes from 'prop-types';
import { Li } from './statisticsStyled';

const Statistics = ({ options, results, total }) => {
  const positive = Math.round((results[0] / total) * 100);
  return (
    <>
      {options.map((option, i) => {
        return (
          <Li key={i}>
            {option[0].toUpperCase() + option.slice(1)}: {results[i]}
          </Li>
        );
      })}
      <Li bold>Total: {total}</Li>
      <Li bold>Positive: {total ? positive + '%' : 'No reviews yet!'}</Li>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  results: PropTypes.arrayOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
