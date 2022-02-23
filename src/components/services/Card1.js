import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import CardComponentOne from './CardComponentOne'
import CardComponentOne_B from './CardComponentOne-B'
import Data from './data'


export default class Card1 extends Component {
    constructor(){
        super()
        this.state ={
            isFlipped:false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}))
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div onMouseOver = {this.handleClick}><CardComponentOne {...Data } /></div>
            <div onMouseOver = {this.handleClick}><CardComponentOne_B {...Data } /></div>


            </ReactCardFlip>
        )
    }
}
