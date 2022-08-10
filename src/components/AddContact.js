import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    courseName: "", 
    name: "",
    lastName:"",
    satartData: "",
    endData: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.courseName === "" || this.state.name === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ courseName: "", name: "", lastname:"" , startData:"", endData: ""});
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="add-contacts-container">
          <Link to="/">
          <button className="add-course-btn-back">
            Back 
          </button> 
        </Link>
        <h2 className="add-stud-h2">Add Course</h2>
        <form className="" onSubmit={this.add}>
          <div className="field">
            <label>courseName</label>
            <input
              type="text"
              name="courseName"
              placeholder="courseName"
              value={this.state.courseName}
              onChange={(e) => this.setState({ courseName: e.target.value })}
            />
          </div>
          <div className="field">
            <label>name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>lastname</label>
            <input
              type="text"
              name="lastName"
              placeholder="lastname"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Course start data</label>
            <input
              type="date"
              name="startData"
              placeholder="startData"
              value={this.state.startData}
              onChange={(e) => this.setState({ startData: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Course end data</label>
            <input
              type="date"
              name="endData"
              placeholder="endData"
              value={this.state.endData}
              onChange={(e) => this.setState({ endData: e.target.value })}
            />
          </div>
          <button className="add-course-btn">Add new course</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
