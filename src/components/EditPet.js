import React, { Component } from "react";
import axios from "axios";

export class EditPet extends Component {
  constructor(props) {
    super(props);

    //Binding this to the methods.
    this.onChangePetname = this.onChangePetname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeBreed = this.onChangeBreed.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting the inital state of the property with keys equal to the mongo DB prop
    this.state = {
      petname: "",
      description: "",
      age: 0,
      date: new Date(),
      available: true,
      breed: ""
    };
  }

  // Fetching all the pet infor from db with matching id
  componentDidMount() {
    axios
      .get("http://localhost:5000/pets/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          petname: res.data.petname,
          description: res.data.description,
          age: res.data.age,
          breed: res.data.breed
        });
      })
      .catch(err => console.log(err));
  }

  //Changing the petname
  onChangePetname(e) {
    this.setState({
      petname: e.target.value
    });
  }

  // Changeing the description
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  // Changing the Breed
  onChangeBreed(e) {
    this.setState({
      breed: e.target.value
    });
  }

  //Changingg the age
  onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  // Handling the subition of the changed data.
  onSubmit(e) {
    // Preventing default Response
    e.preventDefault();

    //Setting the new state of the pet
    const pet = {
      petname: this.state.petname,
      description: this.state.description,
      age: this.state.age,
      breed: this.state.breed
    };

    console.log(pet);

    // Sending the data to the database
    axios
      .post(
        "http://localhost:5000/pets/update/" + this.props.match.params.id,
        pet
      )
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    // Changing to the homepage
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit the pet</h3>
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

export default EditPet;
