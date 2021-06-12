import React, { Component} from 'react';

import './style.css';

// const tag_login = 'Logar';

export default class Button extends Component{
    render(){
        return(
            <button className="button" type={this.props.type}>
                {this.props.name}
            </button>
        )
    }
}