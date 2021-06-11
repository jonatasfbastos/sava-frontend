import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import InputUser from '../../components/InputComponent/inputUsername';
import InputPass from '../../components/InputComponent/inputPassword';
import Button from '../../components/buttons/button';

<<<<<<< HEAD
import logo from '../../icon/logotipo.svg';
import lock from '../../icon/lock-icon.svg';
import IconFacebook from '../../icon/facebook';
import IconTwitter from '../../icon/twitter';
import IconIfba from '../../icon/ifba';
=======
import logo from '../../ifba.svg';
import lock from '../../icon/lock-icon.svg';
>>>>>>> 00ed7e35844bdda689febc0cb53099c94ef2d4cf

import './login.css';
import Twitter from '../../icon/twitter';

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
                        <br/>
                        <Link to="/recuperar-senha" className="App-link">Esqueçeu a senha?</Link>
                        </form>
                </header>

<<<<<<< HEAD
                <footer className="App-footer">
                    <h5 className="App-subtitle">&copy; 2021 SAVA | Desenvolvimento IFBA.</h5>
                    <IconFacebook className="App-facebook icon"/>
                    <Twitter className="App-twitter icon"/>
                    <IconIfba className="App-ifba icon" />
=======
                <footer>
                    <h5 className="App-subtitle">&copy; 2021 SAVA | Desenvolvimento IFBA.</h5>
                    
>>>>>>> 00ed7e35844bdda689febc0cb53099c94ef2d4cf
                </footer>
            </div>
        );
    }

}


