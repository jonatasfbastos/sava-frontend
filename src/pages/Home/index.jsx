import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component  {

  render() {
    return (
      <div className="home">
        <h1>Home page</h1>
        <Link to='/login'>Veja a tela de Login</Link>
        <br />
        <Link to='/class/new'>Nova turma</Link>
        <br />
        <Link to='/curses/new'>Novo Curso</Link>
      </div>
    )
  }
}

export default Home;