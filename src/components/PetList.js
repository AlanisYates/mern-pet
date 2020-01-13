import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import pug from "../Assets/img/pug.jpg";
import CardDeck from "react-bootstrap/CardDeck";

import axios from "axios";
import Container from "react-bootstrap/Container";

// Functional Pet component
const Pet = props => (
  <Card
    tag="a"
    className="text-center"
    style={{ width: "2rem", cursor: "pointer" }}
  >
    <Card.Img variant="top" src={pug} />
    <Card.Body>
      <Container>
        <Card.Title>{props.pet.petname}</Card.Title>
      </Container>
    </Card.Body>
  </Card>
  // <tr>
  //   <td>{props.pet.petname}</td>
  //   <td>{props.pet.description}</td>
  //   <td>{props.pet.breed}</td>
  //   <td>{props.pet.age}</td>
  //   <td>{props.pet.date}</td>
  //   <td>{JSON.stringify(props.pet.available)}</td>
  //   <td>
  //     <Link to={"/edit/" + props.pet._id}>edit</Link> |{" "}
  //     <a
  //       href="#"
  //       onClick={() => {
  //         props.deletePet(props.pet._id);
  //       }}
  //     >
  //       delete
  //     </a>
  //   </td>
  // </tr>
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
      .then(res =>
        this.setState({
          pets: this.state.pets.filter(el => el.available !== false)
        })
      )
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
    return <CardDeck>{this.petList()}</CardDeck>;
  }
}

export default PetList;
