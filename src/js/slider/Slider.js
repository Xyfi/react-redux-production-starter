import React, { Component } from "react";

import Slide from "./Slide";

import styles from "./style.scss";

const KEY_LEFT = 37;
const KEY_RIGHT = 39;

class Slider extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            index: 0,
        }

        this.nextSlide = this.nextSlide.bind( this );
        this.prevSlide = this.prevSlide.bind( this );
    }

    componentDidMount() {
        window.addEventListener( 'keydown', event => {
            switch( event.keyCode ) {
                case KEY_LEFT:
                    return this.prevSlide();
                case KEY_RIGHT:
                    return this.nextSlide();
            }
        } );
    }

    nextSlide() {
        if ( this.state.index < this.props.slides.length - 1 ) {
            this.setState( { index: this.state.index + 1 } );
        }
    }

    prevSlide() {
        if( this.state.index > 0 ) {
            this.setState( { index: this.state.index - 1 } );
        }
    }

    render() {
        return <Slide data={ this.props.slides[ this.state.index ] } />
    }
}

export default Slider;
