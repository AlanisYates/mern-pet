import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Functional Pet component
const Pet = props => (
  <tr>
    <td>{props.pet.petname}</td>
    <td>{props.pet.description}</td>
    <td>{props.pet.breed}</td>
    <td>{props.pet.age}</td>
    <td>
      <Link to={"/edit/" + props.pet._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deletePet(props.pet._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export class PetList extends Component {
  constructor(props) {
    super(props);

    //Delete pet bind
    this.deletePet = this.deletePet.bind(this);

    // Setting the inital state of the pets.
    this.state = { pets: [] };
  }

  // Method that happens before the componnt mounts/renders.
  componentDidMount() {
    axios
      .get("http://localhost:5000/pets")
      .then(res => {
        this.setState({ pets: res.data });
      })
      .catch(err => console.log(err));
  }

  // Method to delete a pet
  deletePet(id) {
    axios.delete("http://localhost:5000/pets/" + id).then(res => {
      console.log(res.data);
    });

    // this will filter through all of the pets and only return the pets whose id is not the one selected ot delete.
    this.setState({
      pets: this.state.pets.filter(el => el._id !== id)
    });
  }

  // renders a list of all the pets using the functional pet comp created above.
  petList() {
    return this.state.pets.map(currentPet => {
      return (
        <Pet pet={currentPet} deletePet={this.deletePet} key={currentPet._id} />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>List of Pets</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Breed</th>
              <th>Age</th>
            </tr>
          </thead>
    <tbody>{this.petList()}</tbody>
        </table>
      </div>
    );
  }
}

export default PetList;
