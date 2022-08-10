import React from "react";
import "./Students.css"
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="editable-stud-tr">
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
        <i className="edit alternate outline icon icon-ed-del"
          style={{ color: "blue"}}
          ></i>
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
        <i 
        className="trash alternate outline icon "
        style={{ color: "red"}}></i>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
