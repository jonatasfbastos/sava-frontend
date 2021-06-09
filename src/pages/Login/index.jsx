import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <Link to='/recuperar-senha'> Recuperar senha</Link>
      </div>
    );
  }
}

export default Login;