import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      /> 
    );
  });
  return (
    <div className="main">
      <h2>
       
        <Link to="/add">
          <button className="add-course-button right">Add course</button>
        </Link>
      </h2>
      <div className="descr-course-titles">
          <h2>Course name</h2>
          <h2>Name</h2>
          <h2>Lastname</h2>
          <h2>Course diuring </h2>
        </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
