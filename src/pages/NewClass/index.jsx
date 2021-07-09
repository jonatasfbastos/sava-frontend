import {Link} from 'react-router-dom';

import Input from '../../components/InputComponent';
import Button from '../../components/buttons';

import './styles.css';
import Logo from '../../icon/logotipo.svg';

export function NewClass() {
  const etapas = ['MatrizINFO - Etapa 1', 'MatrizINFO - Etapa 2', 'MatrizINFO - Etapa 3'];

  return (
    <div id="new-class">
      <main>
        <div className="main-header">
          <img src={Logo} alt="Logo sava" />
        </div>
        
        <form >
          <label>
            {/* Etapa: */}
            <select
              required
              id="select-etapa"
              name="etapa"
              type="select"
            >
              <option value="" disabled selected hidden>Selecione a etapa</option>
              {etapas.map((etapa, index)=> (
                <option key={index} value={index + 1}>{etapa}</option>
              ))}
            </select>
          </label>

          <Input
            name="anoLetivo"
            type="date"
            placeholder="Ano Letivo"
          />
          
          <Input
            name="nome"
            type="text"
            placeholder="Nome da turma"
          />

          <Button type="submit" >Salvar</Button>
        </form>
        <Link to='/' >Voltar</Link>
      </main>
    </div>
  );
}