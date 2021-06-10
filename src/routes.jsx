import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/index';
import logo from "./logo.svg";


function Routes() {

  return (
    <BrowserRouter >
    {/* Aqui ficará as rotas para cada page,
    mas por enquanto coloquei isso ai só pra exibir algo*/}

      <Route exact path="/">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Route>

      {/* Rota para a tela de login */}
      <Route path="/login">
        <Login />
      </Route>

      {/* Rota para a tela de recuperação de senha */}
      <Route path="/recuperar-senha">
        <div><h2>Recuperação de senha</h2></div>
      </Route>
    </BrowserRouter>
  )
}

{/* function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/login" component={login} />
    </BrowserRouter>
  ); */}


export default Routes;

