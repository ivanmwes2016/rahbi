import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'


export default class Card extends Component {
    constructor(){
        this.state ={
            isFlipped:false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}))
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                


            
            </ReactCardFlip>
        )
    }
}
