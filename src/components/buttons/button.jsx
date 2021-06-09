import React, { Component} from 'react';

import './buttons.css';

const tag_login = 'Logar';

export default class Button extends Component{
    render(){
        return(
            <button className="button">{tag_login}</button>
        )
    }
}