import { BrowserRouter, Route } from 'react-router-dom';
import logo from "./logo.svg";


function Routes() {

  return (
    <BrowserRouter >
    {/* Aqui ficará as rotas para cada page,
    mas por enquanto coloquei isso ai só pra exibir algo*/}

      <Route path="/">
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

      {/* <Route path="/login">
        <Login />
      </Route> */}

    </BrowserRouter>
  )
}

export default Routes;