import { 
  BrowserRouter,
  Route,
}from 'react-router-dom';
import App from "./App";
import login from "./pages/Login/login";



function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/login" component={login} />
    </BrowserRouter>
  );
}

export default Routes;

