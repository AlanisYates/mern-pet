import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export class AddPet extends Component {
  constructor(props) {
    super(props);

    //Binding this to the methods.
    this.onChangePetname = this.onChangePetname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeBreed = this.onChangeBreed.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting the state of the property with keys equal to the mongo DB prop
    this.state = {
      petname: "",
      description: "",
      age: 0,
      date: new Date(),
      available: true,
      breed: ""
    };
  }

  // Methods used to update the state of the props.
  onChangePetname(e) {
    // Setting the state.
    this.setState({
      petname: e.target.value
    });
  }
  onChangeDescription(e) {
    // Setting the state.
    this.setState({
      description: e.target.value
    });
  }
  onChangeAge(e) {
    // Setting the state.
    this.setState({
      age: e.target.value
    });
  }
  onChangeDate(date) {
    // Setting the state.
    this.setState({
      date: date
    });
  }
  onChangeAvalibility(e) {
    // Setting the state.
    this.setState({
      availible: true
    });
  }
  onChangeBreed(e) {
    // Setting the state.
    this.setState({
      breed: e.target.value
    });
  }

  // Handle the subitition
  onSubmit(e) {
    // Prevents the defalt html form process from taking place
    e.preventDefault();

    const pet = {
      petname: this.state.petname,
      description: this.state.description,
      age: this.state.age,
      date: this.state.date,
      available: this.state.available,
      breed: this.state.breed
    };

    console.log(pet);

    // Sending the data to the database
    axios
      .post("http://localhost:5000/pets/add", pet)
      .then(res => console.log(res.data));

    // Changing to the homepage
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          {/* Name */}
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.petname}
              onChange={this.onChangePetname}
            />
          </div>

          {/* Breed */}
          <div className="form-group">
            <label>Breed: </label>
            <div>
              <input
                type="text"
                className="form-control"
                value={this.state.breed}
                onChange={this.onChangeBreed}
              />
            </div>
          </div>

          {/* Age */}
          <div className="form-group">
            <label>Age: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>

          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddPet;
