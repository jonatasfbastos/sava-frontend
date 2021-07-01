import './styles/global.css';
import Routes from './routes';
import {AuthContextProvider} from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      {/* Routes carregará as pages de acordo com a rota atual. */}
      {/* Veja o arquivo routes.jsx */}
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
