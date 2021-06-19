import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./register.css";

import Logotipo from '../../icon/logotipo_sava.svg';

import Input from '../../components/InputComponent';
import Button from '../../components/buttons';

import IconLock from '../../icon/lock';
import IconFacebook from '../../icon/facebook';
import IconTwitter from '../../icon/twitter';
import IconIfba from '../../icon/ifba';

export default class RegisterPages extends Component{

    render(){
        return(
           <div className="AppRoot">
               <header className="App">
                    <form>
                        <img className="App-icone" src={Logotipo} alt=""/>
                        <div className="linha">
                            <IconLock className="iconLock" />
                            <h5>Cadastro perfil de Usuário.</h5>
                        </div>
                        <Input type="text" placeholder="Nome: "/>
                        <Input type="text" placeholder="Descrição: "/>
                        <Button type="submit" name="Cadastrar"/>
                        <br />              
                        <Link to="/" className="App-link">Voltar</Link>
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




