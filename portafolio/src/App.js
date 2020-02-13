import React, { useState} from 'react';
import styled from '@emotion/styled';
import Spanish from './components/Spanish';
import English from './components/English';
import Social from './components/Social';
import AboutMessage from './components/AboutMessage';
import foto from './foto.jpg';

const Container = styled.div`
    max-width: 70%;
    margin: 50px auto;
    padding: 25px 5%; 
    background-color: #fff;
    border-radius: 15px;
    text-align: center;
    @media (max-width: 500px){
      max-width: 100%;
      margin: 0px auto;
      padding: 20px 5%; 
      background-color: #fff;
      border-radius: 0;
    } 
`;

const TopOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Imagen = styled.img`

  max-width: 400px;
  max-height: 200px;
  border-radius: 50%;
  margin-top: 2rem;
  text-align: center;

  -webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
`;

const LanguageButton = styled.div`
min-width: 80px;
display: flex;
  & > p {
    margin-top: 15px;
  }
`;

function App() {

  const [language, changeLanguage] = useState(false);

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
        <LanguageButton>
          <p>EN</p>
          <label className="switch">
            <input type="checkbox"
                      onChange={handleChangeLanguage}
            ></input>
            <span className="slider round"></span>
            </label>
            <p>ES</p>
        </LanguageButton>

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
