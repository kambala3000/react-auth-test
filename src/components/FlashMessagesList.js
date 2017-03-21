import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FlashMessageList.css';

import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../actions/flashMessagesActions';


class FlashMessageList extends Component {
    render() {
        const messagesItems = this.props.messages.map(message => <FlashMessage key={ message.id } message={ message } deleteFlashMessage={ this.props.deleteFlashMessage } />);
        return (
            <div className='flashMessages'>
                { messagesItems }
            </div>
        );
    }
}

FlashMessageList.propTypes = {
    messages: React.PropTypes.array.isRequired,
    deleteFlashMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList);