import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import InputUser from '../../components/InputComponent/inputUsername';
import InputPass from '../../components/InputComponent/inputPassword';
import Button from '../../components/buttons/button';

import logo from '../../ifba.svg';
import lock from '../../icon/lock-icon.svg';

import './login.css';

const login = 'Login';

export default class LoginPages extends Component{

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <form className="App-form">
                        <img className="App-icone" src={logo} alt=""/>
                        <div className="App-line">
                            <svg xmlns="http://www.w3.org/2000/svg" className="lock-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <h5 className="App-title">{login}</h5>
                        </div>
                        <InputUser />
                        <InputPass />
                        <Button />
                        <Link to="/recuperar-senha" className="App-link">Esqueçeu a senha?</Link>
                        </form>
                </header>
            </div>
        );
    }

}


