import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'; 
import Spanish from './components/Spanish';
import English from './components/English';
import Social from './components/Social';
import {faLanguage} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    max-width: 90%;
    margin: 50px auto;
    padding: 25px; 
    background-color: #fff;
    border-radius: 15px;
`;

const TopOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AboutButton = styled.button`
  padding: 5px 10px;
  border-radius: 15px;
  background-color: #FF0000;
  color: #fff;
  border: 0px solid #999999;
  &:hover{
    cursor: pointer;
  }
`;

function App() {

  const [language, changeLanguage] = useState('EN');

  //useEffect(() => {
    //changeLanguage('EN');
  //});

  const handleChange = e => {
    //actualizar el state
    let lenguaje = e.target.value;

    changeLanguage(lenguaje);
}

  return (
      <Container>
        <TopOptions>
          <AboutButton>About Me</AboutButton>
          <Social/>
            <div>
            <FontAwesomeIcon icon={faLanguage} />
              <select
                name="language"
                onChange={handleChange}
              >
                <option value="EN">English</option>
                <option value="ES">Español</option>
              </select>
            </div>
        </TopOptions>
        {language === 'EN' ? <English/> : <Spanish/>} 
          


      </Container>
  );
}

export default App;
