import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';

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
    const history = useHistory();
    const {signIn} = useAuth();

    // Verifica e envia os dados para serem autenticados
    async function handleSubmit(event) {
        event.preventDefault();

        const {login, password} = user;
        
        if(login.trim() === '') {
            alert("Informe o Login");
            return;
        }

        if(password.trim() === '') {
            alert("Informe a Senha");
            return;
        }

        if(!await signIn(login, password)) {
            alert('Falha ao Logar');
            setUser({login: '', password: ''});
            return;
        }

        history.push('/');
    }

    // salva os dados dos inputs no state
    function handleInputChange(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }
    
    return (
        <div className="AppRoot-login">
            <header className="App-login">
                 <form onSubmit={handleSubmit} >
                     <img className="App-icone-l" src={Logotipo} alt=""/>
                     <div className="linha-login    ">
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
                     <Link to="/password/recover" className="App-link-login">Recuperar Conta?</Link>
                 </form>
            </header>
            <footer className="rodape-login">
                <h5 className="rodape_titulo-login">&copy; 2021 SAVA | Desenvolvimento IFBA.</h5>
                <div className="linha_rodape-login">
                    <IconFacebook />
                    <IconTwitter />
                    <IconIfba />
                </div>
            </footer>
        </div>
    );
}



