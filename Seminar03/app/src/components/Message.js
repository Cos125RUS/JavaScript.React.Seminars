import PropTypes from "prop-types";

const Message = ({id, text}) => {
  return (
      <li id={id}>{text}</li>
  );
}

Message.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
}

export default Message;