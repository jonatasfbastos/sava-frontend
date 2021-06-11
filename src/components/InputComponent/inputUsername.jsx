import React, {Component} from 'react';
import './inputs.css';

<<<<<<< HEAD
const tag_username = 'Usuário:';
=======
const tag_username = 'Usuário';
>>>>>>> 00ed7e35844bdda689febc0cb53099c94ef2d4cf

export default class InputUser extends Component{
    render(){
        return(
            <input className="inputUser" type="text" placeholder={tag_username}/>
        )
    }
}
