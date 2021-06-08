import PropTypes from 'prop-types';

export const Header = ({}) => {
  return (
    <header className="header">
      <h1>asasas</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'Default Title',
};

Header.propTypes = {
  title: PropTypes.string,
};
