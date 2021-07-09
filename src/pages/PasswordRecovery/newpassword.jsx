import React , {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';
import api from '../../services/api';
import './style.css'
import Button from '../../components/buttons';
import InputComponent from '../../components/InputComponent/index';
import logo from '../../icon/logotipo_sava.svg';
import IconLock from '../../icon/lock';
import IconFacebook from '../../icon/facebook';
import IconTwitter from '../../icon/twitter';
import IconIfba from '../../icon/ifba';

function PasswordRecovery() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const {userId, signOut} = useAuth();
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    
    if(!checkPasswords()) {
      alert("Senhas não compatíveis");
      return;
    }
    
    // Atualiza o somente a senha
    api.patch(`/users/${userId}`, {
      password: newPassword
    }).then(response => {
      if(response.data.id === userId) {
        signOut();
        window.confirm('Senha alterada com sucesso!');
        history.push('/login');
      }
    }).catch(error => {
      console.error(error);
    });
  }

  function checkPasswords() {
    // Pode ter mais verificações aqui
    return newPassword.trim() === confirmNewPassword.trim();
  }

  return(
    <div className="pass-recovery">
        <form onSubmit={handleSubmit} class="fundo-form">
          <div className="content">
            <div>
              <img className="App-icone sava logo-sava" src={logo} alt=""/>
            </div>
            <div className="div-recupera">
              <IconLock className="iconLock" />
              <p>Recuperar Conta</p>
            </div>
            <InputComponent
              minLength="8"
              required
              type="password"
              name="newPassword"
              className="login-entrada marg-bottom-15"
              placeholder="Nova senha"
              value={newPassword}
              onChange={event => setNewPassword(event.target.value)}
            />

            <InputComponent
              minLength="8"
              required
              type="password"
              name="confirmNewPassword"
              className="login-entrada marg-bottom-15"
              placeholder="Confirmar senha"
              value={confirmNewPassword}
              onChange={event => setConfirmNewPassword(event.target.value)}
            />

            <Button
              type="submit"
              className="recupera-botao marg-top-30"
            >
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