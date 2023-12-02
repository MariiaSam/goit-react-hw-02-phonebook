import PropTypes from 'prop-types';
import { Title } from './ContactTitle.styled';

export const ContactTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

ContactTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
