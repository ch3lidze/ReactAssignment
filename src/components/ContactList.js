import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const [userList, setUserList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  // console.log(props);

  useEffect(() => {
    setUserList((JSON.parse(localStorage.getItem("contacts"))))
    setFilteredList((JSON.parse(localStorage.getItem("contacts"))))
  }, [])
  
  const hendleSearch = value => {
    const filtered = userList.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredList(filtered)
  }

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  return (
    <div className="main">
      <h2>
        <input 
          onChange={e => {
            hendleSearch(e.target.value)
          }}
        />
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
      <div className="ui celled list">
        {filteredList.map(contact => (
          <ContactCard
            contact={contact}
            clickHander={deleteConactHandler}
            key={contact.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
