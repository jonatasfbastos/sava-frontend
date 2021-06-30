import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/index';
import Home from './pages/Home/index'
import Recovery from './pages/PassowordRecovery/index';
import Register from './pages/register/register';

// import logo from "./logo.svg";

function PrivateRoute({component: Component, ...rest}) {
  const isAutenticated = true;

  return (
    <Route 
      {...rest}
      render={props => (
        isAutenticated ? (
          <Component {...props}/>
        ):(
          <Redirect
            to={{
              pathname: "/login",
              state: {from: props.location}
            }}
          />
        )
      )}
    />
  );
}


function Routes() {

  return (

    <BrowserRouter >
    {/* O Swith não deixa duas rotas serem exibidas ao mesmo tempo */}
      <Switch>
        {/* Aqui ficará as rotas para cada page,*/}

        {/* Rota para a home page */}
        <PrivateRoute exact path="/" component={Home}/>

        {/* Rota para a tela de login */}
        <Route path="/login">
          <Login />
        </Route>

        {/* Rota para a tela de recuperação de senha */}
        <Route path="/recuperar-senha">
          <Recovery />
        </Route>

        <PrivateRoute path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;


