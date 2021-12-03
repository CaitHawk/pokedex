import React, { Component } from 'react';
import './Title.css'

class Title extends Component {
    render(){
        return (
            <div className="Title">
                <h1 className="Title-title">Pokemon Game!</h1>
                <p className="Title-directions">*Refresh to see who will win!</p>
            </div>
        )
    }
}

export default Title;
