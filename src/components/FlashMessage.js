import React, { Component } from 'react';
import classnames from 'classnames';

class FlashMessage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.deleteFlashMessage(this.props.message.id);
    };

    render() {
        const { type, text } = this.props.message;
        return (
            <div className={classnames('flashMessages__item', {
                'flashMessages__item--green': type === 'success',
                'flashMessages__item--red': type === 'error',
            })}>
                <p className="flashMessages__text">{ text }</p>
                <button className="flashMessages__close" onClick={ this.handleClick } >&times;</button>
            </div>
        );
    }
}

FlashMessage.propTypes = {
    message: React.PropTypes.object.isRequired,
    deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;