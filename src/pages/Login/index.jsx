import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './login.css';

import Logotipo from '../../icon/logotipo_sava.svg';

import Input from '../../components/InputComponent';
import Button from '../../components/buttons';

import IconLock from '../../icon/lock';
import IconFacebook from '../../icon/facebook';
import IconTwitter from '../../icon/twitter';
import IconIfba from '../../icon/ifba';

export default class LoginPages extends Component{

    render(){
        return(
           <div className="AppRoot">
               <header className="App">
                    <form>
                        <img className="App-icone" src={Logotipo} alt=""/>
                        <div className="linha">
                            <IconLock className="iconLock" />
                            <h5>Login</h5>
                        </div>
                        <Input type="text" placeholder="Login: "/>
                        <Input type="password" placeholder="Senha: "/>
                        <Button type="submit" name="Enviar"/>
                        <br />              
                        <Link to="/recuperar-senha" className="App-link">Recuperar Conta?</Link>
                    </form>
               </header>
               <footer className="rodape">
                   <h5 className="rodape_titulo">&copy; 2021 SAVA | Desenvolvimento IFBA.</h5>
                   <div className="linha_rodape">
                       <IconFacebook />
                       <IconTwitter />
                       <IconIfba />
                   </div>
               </footer>
           </div>
        );
    }

}



