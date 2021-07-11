import {Link, useHistory} from 'react-router-dom';
import { useEffect, useState } from 'react';

import api from '../../services/api';
import Input from '../../components/InputComponent';
import Button from '../../components/buttons';

import './styles.css';
import Logo from '../../icon/logotipo.svg';

export function NewClass() {
  const [stepsList, setStepsList] = useState([]);
  const [stepId, setStepId] = useState(-1);
  const [year, setYear] = useState('');
  const[name, setName] = useState('');

  const history = useHistory();

  // Executa assim que o component é renderizado
  useEffect(() => {
    setSteps();
  }, []);

  // Defini o nome da turma
  useEffect(() => {
    let step = stepsList.find(stepItem => stepItem.id === stepId);

    if(step && year) {
      setName(`${step.name} - ${year}`);
    }
  },[stepsList, stepId, year]);

  function handleSubmit(event) {
    event.preventDefault();
    
    const clazz = {
      name,
      year,
      stepId
    }

    // Salva na base
    api.post('/classes', clazz).then(response => {
      window.confirm('Cadastrado com sucesso!');
      history.push('/');
    }).catch(error => {
      console.error(error);
    })

  }

  // Busca as etapas disponíveis
  function setSteps() {
    api.get('/steps?_expand=matrix').then(response => {
      setStepsList(response.data)
    }).catch(error => {
      console.error(error);
    })
  }

  // Gera uma lista de anos
  function getYearsList() {
    let list = [];
    let y = new Date().getFullYear();
    for(let i=y;i >= 2010;i--) {
      list.push(String(i));
    }
    return list;
  }

  return (
    <div id="new-class">
      <main>
        <div className="main-header">
          <img src={Logo} alt="Logo sava" />
        </div>
        
        <form onSubmit={handleSubmit}>
          <label>
            {/* Etapa: */}
            <select
              required
              id="select-etapa"
              name="etapa"
              type="select"
              value={stepId}
              onChange={e => setStepId(Number.parseInt(e.target.value))}
            >
              <option
                disabled
                defaultValue
                // selected
                hidden
                value={-1}
              >
                Selecione a etapa
              </option>

              {stepsList.map((step, index)=> (
                <option key={index} value={step.id}>{step.name}</option>
              ))}
            </select>
          </label>

          <label>
            <select
              required
              id="select-year"
              name="year"
              type="select"
              value={year}
              onChange={e => setYear(e.target.value)}
            >
              <option
                disabled
                defaultValue
                // selected
                hidden
                value=""
              >
                Selecione o ano letivo
              </option>

              {getYearsList().map(((year, index) => (
                  <option key={index} value={year}>{year}</option>
              )))}
            </select>
          </label>
          
          <Input
            name="nome"
            type="text"
            placeholder="Nome da turma"
            disabled
            value={name}
          />

          <Button type="submit" >Salvar</Button>
        </form>
        <Link to='/' >Voltar</Link>
      </main>
    </div>
  );
}