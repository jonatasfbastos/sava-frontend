import React from 'react';
import {Link} from 'react-router-dom';

class PasswordRecovery extends React.Component {

  render() {
    return(
      <div className="pass-recovery">
        <h1>Recuperação de senha</h1>
        <Link to='/login'>Voltar</Link>
      </div>
    )
  }
}

export default PasswordRecovery;