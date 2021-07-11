import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component  {

  constructor(props){
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
      const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
  
      // Validate that all variables exist
      if(toggle && nav && bodypd && headerpd){
          toggle.addEventListener('click', ()=>{
              // show navbar
              nav.classList.toggle('show')
              // change icon
              toggle.classList.toggle('bx-x')
              // add padding to body
              bodypd.classList.toggle('body-pd')
              // add padding to header
              headerpd.classList.toggle('body-pd')
          })
      }
  }
  
  showNavbar('header-toggle','nav-bar','body-pd','header')
  
  /*===== LINK ACTIVE  =====*/ 
  const linkColor = document.querySelectorAll('.nav__link')
  
  function colorLink(){
      if(linkColor){
          linkColor.forEach(l=> l.classList.remove('active'))
          this.classList.add('active')
      }
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
  }

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