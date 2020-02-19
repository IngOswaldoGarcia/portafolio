import React from 'react';
import Popup from "reactjs-popup";
import styled from '@emotion/styled'; 
import Social from "./Social";
import PropTypes from 'prop-types';

const AboutMessage = ({language}) => {

const AboutButton = styled.button`
  padding: 10px 10px;
  border-radius: 15px;
  min-width: 90px;
  min-height: 40px;
  max-height: 50px;
  background-color: #FFFFFF;
  color: #000000;
  border: 1px solid #999999;
  &:hover{
    cursor: pointer;
    background-color: #ECF0F1;
    transition-timing-function: ease-in;
    transition: 0.3s;
  }
  @media (min-width: 2000px){
    padding: 20px 20px;
    min-width: 180px;
    min-height: 80px;
    max-height: 100px;
    font-size: 2rem;
  } 
`;

    return ( 
      !(language) ?
        <Popup trigger={<AboutButton className="button">About Me</AboutButton>} modal>
        {close => (
          <div className="modal">
            <input type="button" className="close" onClick={close} value="&times;" />
              
            <div className="header"> HELLO!</div>
            <div className="content">
              <div className="texto">
                  <p>          
                  My name is Oswaldo, I'm a young Engineer of computer systems, programmer, web and game designer, passionate about every software project I develop.</p>
                  <p>
                  I love it when things look really good and are useful too. Always hoping that every person who sees it enjoys the work done. I'm very focused on small details.
                  </p>
                  <p>
                  Now, I'm living at Morelia City, Michoacán on México and I'm always looking for new work experiences to do my best in every project and all users enjoy my work, my passion.
                  </p>
              </div>
              <div>
                  <p className="followSpace">Follow me:</p>
                  <Social/>
              </div>
            </div>
          </div>
        )}
        </Popup>
        :
        <Popup trigger={<AboutButton className="button"> Sobre mí </AboutButton>} modal>
        {close => (
        <div className="modal">
          <input type="button" className="close" onClick={close} value="&times;"/>
          <div className="header"> ¡HOLA!</div>
          <div className="content">
            <div className="texto">
                <p>          
                Mi nombre es Oswaldo, soy un joven ingeniero en sistemas, 
                programador, diseñador web y de videojuegos, apasionado por cualquier
                tipo de proyectos de software.</p>
                <p>
                Me gusta que las cosas se vean bien y que funcionen mejor. Que sea un deleite
                visual para quien lo mire. Muy enfocado en los pequeños detalles.
                </p>
                <p>
                Actualmente vivo en Morelia, Michoacán en México y siempre estoy en búsqueda de
                nuevas experiencias laborales, buscando dar lo mejor de mi en cada proyecto y 
                que los usuarios disfruten de mi trabajo.
                </p>
            </div>
            <div>
                <p className="followSpace">Sígueme:</p>
                <Social/>
            </div>
          </div>
        </div>
        )}
        </Popup>
        
);}

AboutMessage.propTypes = {
  language: PropTypes.bool.isRequired
}

export default AboutMessage;


