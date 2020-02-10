import React from 'react';
import Popup from "reactjs-popup";

const AboutMessage = () => ( 
        <Popup
        trigger={open => (
          <button className="button">Trigger - {open ? "Opened" : "Closed"}</button>
        )}
        position="right center"
        closeOnDocumentClick
      >
        <span> Popup content </span>
      </Popup>
     );

 
export default AboutMessage;