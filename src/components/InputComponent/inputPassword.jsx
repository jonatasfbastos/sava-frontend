import React, {Component} from 'react';
import './inputs.css';

const tag_password = 'Senha:';

export default class InputPass extends Component{
    render(){
        return(
            <input className="inputPass" type="password" placeholder={tag_password }/>

        )
    }
}
