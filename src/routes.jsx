import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Login from './pages/Login/index';
import Home from './pages/Home/index'
import PasswordRecovery from './pages/PasswordRecovery/index';
import NewPassword from './pages/PasswordRecovery/newpassword';
import Register from './pages/register/register';
import { NewClass } from './pages/NewClass';
import RegistrarCurso from './pages/curseReg/curse';

// import logo from "./logo.svg";

function PrivateRoute({component: Component, ...rest}) {
  const {signed} = useAuth();

  return (
    <Route 
      {...rest}
      render={props => (
        signed ? (
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

function PrivateRouteOnlyLogin({component: Component, ...rest}) {
  const {userId} = useAuth();

  return (
    <Route 
      {...rest}
      render={props => (
        userId ? (
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

        {/* Rotas para a tela de recuperação de senha */}
        <Route path="/password/recover" component={PasswordRecovery}/>
        <PrivateRouteOnlyLogin path="/password/new" component={NewPassword}/>

        {/* Rota para cadastrar tipo de usuário */}
        <PrivateRoute path="/register" component={Register}/>

        <PrivateRoute path="/class/new" component={NewClass}/>

        <PrivateRoute path="/curses/new" component={RegistrarCurso}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;


