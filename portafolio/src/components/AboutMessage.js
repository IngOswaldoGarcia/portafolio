import React from 'react';
import Popup from "reactjs-popup";
import styled from '@emotion/styled'; 

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
        <div className="header"> Modal Title </div>
        <div className="content">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);}

 
export default AboutMessage;