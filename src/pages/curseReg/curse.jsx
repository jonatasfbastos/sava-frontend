import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import "./curse.css";

import Input from '../../components/InputComponent';
import Button from '../../components/buttons';

import IconLock from '../../icon/lock';


function RegistrarCurso(){
    return(
        <div className="AppRoot-curse">
            <header className="App-curse">
                <div className="App-curse-icone-close">
                    <a  className="App-curse-close" href="#">X</a>
                </div>
                 <form>   
                     <div className="linha-curse">
                         <h5>Adicionar Curso</h5>
                     </div>
                     <Input type="text" placeholder="Nome"/>
                     <Input type="text" placeholder="Código"/>
                     <Button type="submit" >Confirmar</Button>
                     <br />              
                 </form>
            </header>
        </div>
    )
}

export default RegistrarCurso;




