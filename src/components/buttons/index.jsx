import React, { Component} from 'react';

import './style.css';

// const tag_login = 'Logar';

export default class Button extends Component{
    render(){
        return(
            <button className="button" {...this.props}>
                {this.props.children}
            </button>
        )
    }
}