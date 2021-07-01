import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './login.css';

import Logotipo from '../../icon/logotipo.svg';

import Input from '../../components/InputComponent';
import Button from '../../components/buttons';

import IconLock from '../../icon/lock';
import IconFacebook from '../../icon/facebook';
import IconTwitter from '../../icon/twitter';
import IconIfba from '../../icon/ifba';

export default function LoginPages() {
    const [user, setUser] = useState({login: '', password: ''});

    function handleSubmit(event) {
        event.preventDefault();

        console.log(user);
    }

    // salva os dados dos inputs no state
    function handleInputChange(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }
    
    return (
        <div className="AppRoot">
            <header className="App">
                 <form onSubmit={handleSubmit} >
                     <img className="App-icone" src={Logotipo} alt=""/>
                     <div className="linha">
                         <IconLock className="iconLock" />
                         <h5>Login</h5>
                     </div>
                     <Input
                        name="login"
                        type="text"
                        placeholder="Login: "
                        value={user.login}
                        onChange={handleInputChange}
                    />

                     <Input
                        name="password"
                        type="password"
                        placeholder="Senha: "
                        value={user.password}
                        onChange={handleInputChange}
                    />
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



