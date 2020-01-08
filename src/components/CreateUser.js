import React, { Component } from "react";
import axios from "axios";

export class CreateUser extends Component {
  constructor(props) {
    super(props);

    //Binding this to the methods.
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting the state of the property with keys equal to the mongo DB prop
    this.state = {
      username: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  // Handle the subitition
  onSubmit(e) {
    // Prevents the defalt html form process from taking place
    e.preventDefault();

    const user = {
      username: this.state.username
    };

    console.log(user);

    // Using axios to send data to backend.
    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));

    // Changing to the homepage
    this.setState({
      username: ""
    });
  }
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
