// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            // The initial state of Bomb should have a property called secondsLeft
            // The initial value of secondsLeft should be equal to the initialCount prop of our Bomb component.
          secondsLeft: props.initialCount
        }
      }

      render() {

        if (this.state.secondsLeft === 0) {
            return ( `Boom!`)
        } else {
        return(
            // It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.
          `${this.state.secondsLeft} seconds left before I go boom!`
        )
        }
      }

}