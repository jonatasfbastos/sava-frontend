import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import Button from '../../components/buttons';
import InputComponent from '../../components/InputComponent/index'
import api from '../../services/api';
import logo from '../../icon/logotipo_sava.svg';
import IconLock from '../../icon/lock';
import IconFacebook from '../../icon/facebook';
import IconTwitter from '../../icon/twitter';
import IconIfba from '../../icon/ifba';

class PasswordRecovery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
      confirmNewPassword: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkPasswords = this.checkPasswords.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    if(!this.checkPasswords()) {
      alert("Senhas não compatíveis");
      return;
    }

    window.alert("Tudo ok, mas ainda não :(");

    // const {newPassword} = this.state;
    
    // api.patch('/users', {
    //   newPassword
    // })

  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  checkPasswords() {
    const {newPassword, confirmNewPassword} = this.state;

    return newPassword.trim() === confirmNewPassword.trim();
  }

  render() {
    return(
      <div className="pass-recovery">
          <form onSubmit={this.handleSubmit} class="fundo-form">
            <div class="content">
              <div>
                <img className="App-icone sava logo-sava" src={logo} alt=""/>
              </div>
              <div class="div-recupera">
                <IconLock className="iconLock" />
                <p>Recuperar Conta</p>
              </div>
              <InputComponent
                minlength="8"
                required
                type="password"
                name="newPassword"
                class="login-entrada marg-bottom-15"
                placeholder="Nova senha"
                value={this.state.newPassword}
                onChange={this.handleInputChange}
              />

              <InputComponent
                minlength="8"
                required
                type="password"
                name="confirmNewPassword"
                class="login-entrada marg-bottom-15"
                placeholder="Confirmar senha"
                value={this.state.confirmNewPassword}
                onChange={this.handleInputChange}
              />

              <Button
                type="submit"
                className="recupera-botao marg-top-30"
              >
                Enviar
              </Button>
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