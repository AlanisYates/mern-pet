import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import pug from "../Assets/img/pug.jpg";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class PetCard extends Component {
  constructor(props) {
    super(props);

    // Setting the inital state of the pets.
    this.state = { pet: [] };
  }
  // Fetching all the pet infor from db with matching id
  componentDidMount() {
    axios
      .get("http://localhost:5000/pets/" + this.props.match.params.id)
      .then(res => {
        this.setState({ pet: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Container>
        <Image src={pug} fluid />
        <h1>{this.state.pet.petname}</h1>
        <hr />
        <h5 className="md-4 text-muted">
          {this.state.pet.breed} - {this.state.pet.age} years old - Male
        </h5>
        <hr />
        <h1>Meet {this.state.pet.petname}</h1>
        <p>{this.state.pet.description}</p>

        <Button variant="primary">Reserve</Button>
      </Container>
    );
  }
}

export default PetCard;
