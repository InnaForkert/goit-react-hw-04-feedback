import PropTypes from 'prop-types';
import { Button } from './optionsStyled';

const Options = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, i) => {
        return (
          <li key={i}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </li>
        );
      })}
    </>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Options;
