import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class AddPet extends Component {
  constructor(props) {
    super(props);

    //Binding this to the methods.
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeBreed = this.onChangeBreed.bind(this);

    // Setting the state of the property with keys equal to the mongo DB prop
    this.state = {
      username: "",
      description: "",
      age: 0,
      date: new Date(),
      availible: true,
      breed: "",
      users: []
    };
  }

  // Lifecycle methods
  componentDidMount() {
    this.setState({ users: ["test user"], username: "test user" });
  }

  // Methods used to update the state of the props.
  onChangeUsername(e) {
    // Setting the state.
    this.setState({
      username: e.target.value
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
      username: this.state.username,
      description: this.state.description,
      age: this.state.age,
      date: this.state.date,
      availible: this.state.availible,
      breed: this.state.breed
    };

    console.log(pet);

    // Changing to the homepage
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
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
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
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
            <label>Breed: </label>
            <div>
                <input
                type="text"
                className="form-group"
                value={this.state.breed}
                onChange={this.onChangeBreed}
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
