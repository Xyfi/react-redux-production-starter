import React from 'react';
import classnames from 'classnames';

class Toggle extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            isActive: props.isActive,
        }
    }

    render() {
        return (
            <button
                onClick={ this.props.onClick }
                className={ classnames( this.props.className, {
                    'is-active': this.state.isActive,
                } ) } >
                { this.props.label }
            </button>
        )
    }
}

Toggle.defaultProps = {
    isActive: false,
};

export default Toggle;
