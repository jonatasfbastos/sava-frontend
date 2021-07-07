import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./register.css";

import Logotipo from '../../icon/logotipo.svg';

import Input from '../../components/InputComponent';
import Button from '../../components/buttons';

import IconLock from '../../icon/lock';
import IconFacebook from '../../icon/facebook';
import IconTwitter from '../../icon/twitter';
import IconIfba from '../../icon/ifba';

export default class RegisterPages extends Component{

    render(){
        return(
           <div className="AppRoot-r1">
               <header className="App-r1">
                    <form>
                        <img className="App-icone-r1" src={Logotipo} alt=""/>
                        <div className="linha-r1">
                            <IconLock className="iconLock" />
                            <h5>Cadastro perfil de Usuário.</h5>
                        </div>
                        <Input type="text" placeholder="Nome: "/>
                        <Input type="text" placeholder="Descrição: "/>
                        <Button type="submit" >Cadastrar</Button>
                        <br />              
                        <Link to="/" className="App-link-r1">Voltar</Link>
                    </form>
               </header>
               <footer className="rodape-r1">
                   <h5 className="rodape_titulo-r1">&copy; 2021 SAVA | Desenvolvimento IFBA.</h5>
                   <div className="linha_rodape-r1">
                       <IconFacebook />
                       <IconTwitter />
                       <IconIfba />
                   </div>
               </footer>
           </div>
        );
    }

}




