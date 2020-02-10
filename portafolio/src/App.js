import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'; 
import Spanish from './components/Spanish';
import English from './components/English';
import Social from './components/Social';
import AboutMessage from './components/AboutMessage';
import Popup from "reactjs-popup";
import foto from './foto.jpg';
import {faLanguage} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const AboutButton = styled.button`
  padding: 10px 10px;
  border-radius: 15px;
  min-width: 90px;
  min-height: 40px;
  background-color: #FF0000;
  color: #fff;
  border: 0px solid #999999;
  &:hover{
    cursor: pointer;
  }
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

  const [language, changeLanguage] = useState('EN');
  const [aboutLanguage, changeAbout] = useState('About Me');

  //useEffect(() => {
    //changeLanguage('EN');
  //});

  const handleChangeLanguage = e => {
  //actualizar el state
    let lenguaje = e.target.value;
    changeLanguage(lenguaje);
}

  const handleClickPop = e => {
  }

  return (
      <Container>

        <TopOptions>
          <AboutButton
            onClick = {handleClickPop}
          >{aboutLanguage}</AboutButton>
          <Social/>
            <div>
            <FontAwesomeIcon icon={faLanguage} />
              <select
                name="language"
                onChange={handleChangeLanguage}
              >
                <option value="EN">English</option>
                <option value="ES">Español</option>
              </select>
            </div>
        </TopOptions>
        <Imagen
            src={foto}
            alt="Oswaldo García Salas"
            />
        {language === 'EN' ? <English changeAbout={changeAbout}/> : <Spanish changeAbout={changeAbout}/>} 
      </Container>
  );
}

export default App;
