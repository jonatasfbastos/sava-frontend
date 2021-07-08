import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/buttons';
import InputComponent from '../../components/InputComponent/index';
import api from '../../services/api';
import './style.css'
import logo from '../../icon/logotipo_sava.svg';
import IconLock from '../../icon/lock';
import IconFacebook from '../../icon/facebook';
import IconTwitter from '../../icon/twitter';
import IconIfba from '../../icon/ifba';

class PasswordRecovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: ''}

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUserByLogin = this.getUserByLogin.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const inputData = this.state.login;
    // console.log(inputData);

    if(inputData.trim() === '') {
      alert("Informe um Login válido");
      return;
    }
    
    if(!await this.getUserByLogin(inputData)) {
      alert("Usuário não encontrado.");
      this.setState({login: ''});
      return;
    }

    // Lógica para enviar link de recuperação para o email AQUI

    // Direciona para outra rota
    this.props.history.push('/password/new');
  }

  async getUserByLogin(login) {
    // Poderia ter mais verificações AQUI
    const response = await api.get('/users',{
      params: {login}
    });

    const user = response.data[0];

    return user;
  }

  render() {
    return(
      <div className="pass-recovery">
          <form class="fundo-form" onSubmit={this.handleSubmit}>
            <div class="content">
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
                class="login-entrada"
                placeholder="Login:"
                value={this.state.login}
                onChange={this.handleInputChange}
              />
              <Button className="recupera-botao" type="submit">
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