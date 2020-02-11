import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Spanish from './components/Spanish';
import English from './components/English';
import Social from './components/Social';
import AboutMessage from './components/AboutMessage';
import foto from './foto.jpg';

const Container = styled.div`
    max-width: 70%;
    margin: 50px auto;
    padding: 25px; 
    background-color: #fff;
    border-radius: 15px;
    text-align: center;
`;

const TopOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;



const Imagen = styled.img`

  max-width: 400px;
  max-height: 200px;
  border-radius: 50%;
  margin-top: 2.5rem;
  text-align: center;

  -webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
`;


function App() {

  const [language, changeLanguage] = useState(false);
  const [aboutLanguage, changeAbout] = useState('About Me');

  //useEffect(() => {
  //changeLanguage('EN');
  //});

  const handleChangeLanguage = e => {
    changeLanguage(e.target.checked);
  }

  return (
    <Container>
      <TopOptions>
        <AboutMessage
          language={language}
        />
        <Social />
        <p>EN</p>
        <label className="switch">
          <input type="checkbox"
                      onChange={handleChangeLanguage}
          ></input>
          <span className="slider round"></span>
          </label>
          <p>ES</p>
        </TopOptions>
        <Imagen
          src={foto}
          alt="Oswaldo García Salas"
        />
        {!(language) ? <English/> : <Spanish/>} 
      </Container>
      );
    }
    
    export default App;
