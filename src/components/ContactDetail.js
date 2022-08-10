import React from "react";
import { Link } from "react-router-dom";
import Students from "../Students"

const ContactDetail = (props) => {
  const { courseName, name, lastName, startData, endData } = props.location.state.contact;
  return (
    <div>
        <Link to="/">
          <button className="details-back-btn">
            Back
          </button> 
        </Link>
        <div className="details-desc-content">
          <div className="details-desc-card">
              <div><h1>{courseName}</h1></div>
              <div className="details-names">
                <div><h2>{name}</h2></div>
                <div><h2>{lastName}</h2></div> 
              </div>
              <div className="details-start-end">
                <div>{startData}</div>
                -
                <div>{endData}</div>
            </div>
          </div>
          
        </div>
        <Students />
      
      
    </div>
  );
};

export default ContactDetail;
