import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class EditPet extends Component {
  constructor(props) {
    super(props);

    //Binding this to the methods.
    this.onChangePetname = this.onChangePetname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
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
    })
  } 

  render() {
    return (
      <div>
        <p>You are on the edit pet component</p>
      </div>
    );
  }
}

export default EditPet;
