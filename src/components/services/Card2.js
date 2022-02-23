import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import CardComponentTwo from './CardComponentTwo'
import CardComponentTwo_B from './CardComponentTwo-B'
import Data from './data'


export default class Card2 extends Component {
    constructor(){
        super()
        this.state ={
            isFlipped:false
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }

    handleClick(e){
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}))
    }

    handleMouseOut(e){
        e.preventDefault()
        this.setState(prevState =>({isFlipped: prevState.isFlipped}))
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div onMouseOver = {this.handleClick} onMouseOut={this.handleMouseOut}><CardComponentTwo {...Data } /></div>
            <div onMouseOver = {this.handleClick}><CardComponentTwo_B {...Data } /></div>


            </ReactCardFlip>
        )
    }
}
