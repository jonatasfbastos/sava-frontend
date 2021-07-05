import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import logo from '../../icon/logotipo_sava.svg';
import IconLock from '../../icon/lock';
import IconFacebook from '../../icon/facebook';
import IconTwitter from '../../icon/twitter';
import IconIfba from '../../icon/ifba';

class PasswordRecovery extends React.Component {

  render() {
    return(
      <div className="pass-recovery">
          <form action="" class="fundo-form">
            <div class="content">
              <div>
                <img className="App-icone sava logo-sava" src={logo} alt=""/>
              </div>
              <div class="div-recupera">
                <IconLock className="iconLock" />
                <p>Recuperar Conta</p>
              </div>
              <input type="text" name="" id="" class="login-entrada" placeholder="Login:" />
              <button class="recupera-botao">Enviar</button>
              <div class="center-block">
                <Link to='/login' class='link-voltar'>Voltar</Link>
              </div>
            </div>
          </form>

          <footer className="App-footer">
            <div class="content">
              <h5 className="App-subtitle centraliza">&copy; 2021 SAVA | Desenvolvimento IFBA.</h5>
              <div class="social-m">
                <IconFacebook className="App-facebook icon"/>
                <IconTwitter className="App-twitter icon"/>
                <IconIfba className="App-ifba icon" />
              </div>
            </div>
          </footer>
      </div>
    )
  }
}

export default PasswordRecovery;