import React from "react";
import { Link } from "react-router-dom";


const ContactCard = (props) => {
  const { id, courseName, name, lastName, startData, endData } = props.contact;
  return (
    <div className="content-course">
      <div className="">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="desc-cours-content">
            <div  className="desc-coursecontent">{courseName}</div> 
            <div className="desc-coursecontent">{name}</div>
            <div className="desc-coursecontent">{lastName}</div>
              <div className="desc-coursecontent descr-course-data ">{startData}</div>
              <div className="desc-coursecontent descr-course-data ">{endData}</div>
          </div> 
      
        </Link>
     
       
      </div>
      <div className="icons-div">
        <div></div>
        <i
            className="trash alternate outline icon"
            style={{ color: "red" }}
            onClick={() => props.clickHander(id)}>
          </i>
          
        </div>
    </div>
  );
};

export default ContactCard;
