import React, {Component} from 'react';
import './style.css';

// const tag_username = 'Usuário:';

export default class InputUser extends Component{
    render(){
        return(
            <label>
                <input className="inputUser" {...this.props} />
            </label>
        )
    }
}
