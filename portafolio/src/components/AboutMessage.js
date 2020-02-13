import React from 'react';
import Popup from "reactjs-popup";
import styled from '@emotion/styled'; 
import Social from "./Social";

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
`;

    return ( 
    <Popup trigger={<AboutButton className="button"> {!(language) ? 'About Me' : 'Sobre mí'}  </AboutButton>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Hola! </div>
        <div className="content">
          <div>
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
                  que los usuarios disfruten de mi trabajo
              </p>
          </div>
          <div>
              <p>Sígueme:</p>
              <Social/>
          </div>
        </div>
      </div>
    )}
  </Popup>
);}

 
export default AboutMessage;