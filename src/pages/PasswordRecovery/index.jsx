import React, {useState}from 'react';
import {Link, useHistory} from 'react-router-dom';
import Button from '../../components/buttons';
import InputComponent from '../../components/InputComponent/index';
import {useAuth} from '../../hooks/useAuth';
import './style.css'
import logo from '../../icon/logotipo_sava.svg';
import IconLock from '../../icon/lock';
import IconFacebook from '../../icon/facebook';
import IconTwitter from '../../icon/twitter';
import IconIfba from '../../icon/ifba';

function PasswordRecovery() {
  const [login, setLogin] = useState('');
  const history = useHistory();
  const {authenticateOnlyLogin} = useAuth();

  function handleInputChange(event) {
    setLogin(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if(login.trim() === '') {
      alert("Informe um Login válido");
      return;
    }
    
    if(!await authenticateOnlyLogin(login)) {
      alert("Usuário não encontrado.");
      setLogin('');
      return;
    }
    // Lógica para enviar link de recuperação para o email AQUI

    // Direciona para outra rota
    history.push('/password/new');
  }

  return(
    <div className="pass-recovery">
        <form className="fundo-form" onSubmit={handleSubmit}>
          <div className="content">
            <div>
              <img className="App-icone sava logo-sava" src={logo} alt=""/>
            </div>
            <div class="div-recupera">
              <IconLock className="iconLock" />
              <p>Recuperar Conta</p>
            </div>
            <InputComponent
              name="login"
              type="text"
              className="login-entrada"
              placeholder="Login:"
              value={login}
              onChange={handleInputChange}
            />
            <Button className="recupera-botao" type="submit">
              Enviar
            </Button>
            <div className="center-block">
              <Link to='/login' className='link-voltar'>Voltar</Link>
            </div>
          </div>
        </form>

        <footer className="App-footer">
          <div className="content">
            <h5 className="App-subtitle centraliza">&copy; 2021 SAVA | Desenvolvimento IFBA.</h5>
            <div className="social-m">
              <IconFacebook className="App-facebook icon"/>
              <IconTwitter className="App-twitter icon"/>
              <IconIfba className="App-ifba icon" />
            </div>
          </div>
        </footer>
    </div>
  )
}

export default PasswordRecovery;