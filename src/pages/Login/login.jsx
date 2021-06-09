import React, {Component} from 'react';

import InputUser from '../../components/InputComponent/inputUsername';
import InputPass from '../../components/InputComponent/inputPassword';
import Button from '../../components/buttons/button';

import logo from '../../ifba.svg';

import './login.css';

const sava = 'SAVA';
const login = 'Login';
const pass = 'Senha';

export default class LoginPages extends Component{

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <form className="App-form">
                        <img className="App-icone" src={logo} alt=""/>
                        <h1 className="App-h1">{sava}</h1>
                        <div className="input-fields">
                            <label className="App-label">{login}</label><br/>
                            <InputUser />
                        </div>
                        <div className="input-fields">
                            <label className="App-label">{pass}</label><br/>
                            <InputPass />
                        </div>
                        <div className="input-fields">
                            <a className="App-lostPass" href="#">Esque&ccedil;eu a senha?</a>
                            <Button/>
                        </div>
                        </form>
                </header>
            </div>
        );
    }

}

