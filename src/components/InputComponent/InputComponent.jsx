import React, {Component} from 'react';
import './inputs.css';

// const tag_username = 'Usuário:';

export default class InputUser extends Component{
    render(){
        return(
            <label>
                <input className="inputUser" name={this.props.name} type={this.props.type} placeholder={this.props.placeholder}/>
            </label>
        )
    }
}
