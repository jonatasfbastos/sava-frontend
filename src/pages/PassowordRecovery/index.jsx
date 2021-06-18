import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import InputUser from '../../components/InputComponent/'
import Button from '../../components/buttons/index'
import logo from '../../icon/logotipo_sava.svg';

import IconFacebook from '../../icon/facebook';
import IconTwitter from '../../icon/twitter';
import IconIfba from '../../icon/ifba';

class PasswordRecovery extends React.Component {

  render() {
    return(
      <div className="pass-recovery">
        <div className="bg-color-recupere">

          <form action="" class="form-recupera">

              <div className="logo-sava"><img className="App-icone sava" src={logo} alt=""/></div>
            
              <div className="App-line">
                <svg xmlns="http://www.w3.org/2000/svg" className="lock-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <h5 className="App-title">{'Recuperar Senha'}</h5>
              </div>

              <InputUser placeholder="Login:" className="login-input pad-top-50"/>
              <br />
              <Button name="Enviar" className="pad-top-50"/>

              <div class="center-block">
                <Link to='/login' class='link-voltar'>Voltar</Link>
              </div>

          </form>

        </div>

        <footer className="App-footer">
            <h5 className="App-subtitle">&copy; 2021 SAVA | Desenvolvimento IFBA.</h5>
            <IconFacebook className="App-facebook icon"/>
            <IconTwitter className="App-twitter icon"/>
            <IconIfba className="App-ifba icon" />
        </footer>
      </div>
    )
  }
}

export default PasswordRecovery;