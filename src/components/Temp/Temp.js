import React, { PropTypes,Component } from 'react'


export default class Temp extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {text,handleClick} = this.props;
        console.log(text)
        return (
            <h1 onClick={handleClick}>{text}</h1>
        )
    }
}