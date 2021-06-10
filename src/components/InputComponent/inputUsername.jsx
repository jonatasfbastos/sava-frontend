import React, {Component} from 'react';
import './inputs.css';

const tag_username = 'Usuário';

export default class InputUser extends Component{
    render(){
        return(
            <input className="inputUser" type="text" placeholder={tag_username}/>
        )
    }
}
