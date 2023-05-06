import React from "react";
import { Link } from "react-router-dom";
import "./typeof.css"

const TypeofContact = () => {
  return (
    <div className="TypeofContact">
    <div className="container">
      <div className=" card">
        <div className="icon"></div>
        <div className="text">
          <h3>OFFICE ADDRESS</h3>
          <p>380 St Kilda Road, MelbourneVIC 3004, Australia</p>
        </div>
      </div>
      <div className="card">
        <div className="icon"></div>
        <div className="text">
          <h3>WORKING HOURS</h3>
          <p>Monday to Friday 09:00 to 18:30 Saturday 15:30</p>
        </div>
      </div>
      <div className="card">
        <div className="icon"></div>
        <div className="text">
          <h3>MESSAGE US:</h3>
          <p>E-mail : <Link to="support@example.com" target="_blank">support@example.com</Link></p>
          <p>E-mail : <Link to="info@example.com" target="_blank">info@example.com</Link></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TypeofContact;
