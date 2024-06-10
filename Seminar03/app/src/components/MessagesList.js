import Message from "./Message";
import PropTypes from "prop-types";
import {List} from "@mui/material";

const MessagesList = ({messages}) => {
    return (
        <List>
            {messages.map(message => (<Message key={message.id} {...message}/>))}
        </List>
    );
}

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
            })
        )
    )
}

export default MessagesList;