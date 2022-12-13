import PropTypes from 'prop-types';
import { Title, List, Container } from './sectionStyled';

const Section = ({ title, children, flex }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List flex={flex}>{children}</List>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
  flex: PropTypes.bool,
};

export default Section;
