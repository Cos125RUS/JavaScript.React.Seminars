import PropTypes from "prop-types";

const Hello = ({name}) => (
  <p>Hello, {name}!</p>
);

Hello.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Hello;