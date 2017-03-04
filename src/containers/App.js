import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Temp from '../components/Temp/Temp'
import * as actions from '../actions/temp'

class App extends Component{

    temp = [
        'How are you?',
        'I\'m fine.Thank you. And you?',
    ]

    render() {
        const {count} = this.props;
        return (
            <Temp text={this.temp[count%2]} handleClick={this.handleClick.bind(this)}/>
        )
    }
    handleClick(){
        const {count,dispatch} = this.props;
        dispatch(actions.temp(count));
    }
}

function mapStateToProps(state) {
    return {
        count: state.temp.count
    }
}

export default connect(mapStateToProps)(App)

