import React, {useEffect} from 'react';

// Components
import MenuItem from '../../components/MenuItem';

// Images
import conselhosImage from '../../assets/img/conselhos.png';
import turmasImage from '../../assets/img/turmas.png';
import perfilImage from '../../assets/img/perfil.png';
import sairImage from '../../assets/img/sair.png';
import logoImage from '../../assets/img/logo.png';
import faceImage from '../../assets/img/facebook.png';
import twitterImage from '../../assets/img/twitter.png';

// CSS
import './styles.css';

function Home() {

  useEffect(() => {
    showNavbar('header-toggle','nav-bar','body-pd','header')
  });
  
  /*===== LINK ACTIVE  =====*/ 
  const linkColor = document.querySelectorAll('.nav__link')
  
  function colorLink(){
      if(linkColor){
          linkColor.forEach(l=> l.classList.remove('active'))
          this.classList.add('active')
      }
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))

  function showNavbar(toggleId, navId, bodyId, headerId) {
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

  return (
    <div id="body-pd">
      <header className="header" id="header">

      </header>


      <div className="l-navbar" id="nav-bar">

        <nav className="nav">
          <div>
            <div className="header__toggle">
              <i className='bx bx-menu' id="header-toggle">X</i>
            </div>

            <div className="nav__list">

              <MenuItem
                to='/'
                content={{image: conselhosImage, name: 'Conselhos'}}
                clazz='active'
              />

              <MenuItem
                to='/'
                content={{image: turmasImage, name: 'Cursos'}}
              />

              <MenuItem
                to='/'
                content={{image: perfilImage, name: 'Perfil'}}
              />

            </div>
          </div>
          
          <MenuItem
            to='/'
            content={{image: sairImage, name: 'Sair'}}
          />
        </nav>

      </div>

      <main>
        <img src={logoImage} alt="sava"/>
      </main>

      <footer className="footer">
        <p>&copy 2021 SAVA | Desenvolvimento: IFBA</p>

        <ul className="footer-list">
          <li>
            <a href="https://facebook.com">
              <img src={faceImage} alt="facebook"/>
            </a>
          </li>

          <li>
            <a href="https://twitter.com">
              <img src={twitterImage} alt="twitter"/>
            </a>
          </li>

          {/* <li>
            <a href="/">
              <img src={sairImage} alt="ifba"/>
            </a>
          </li> */}

        </ul>
      </footer>
{/* 
      <!--===== MAIN JS =====-->
      <script src="js/main.js"></script> */}


    </div>

  )
}

export default Home;