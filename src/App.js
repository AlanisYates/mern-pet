import React from "react";
// React Router is used to ctalk to the backend and the routes created.
import { BrowserRouter as Router, Route } from "react-router-dom";
// Imported bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// // Importing the Components
import Navbar from "./components/Navbar.component";
import PetList from "./components/PetList";
import EditPet from "./components/EditPet";
import AddPet from "./components/AddPet";
import CreateUser from "./components/CreateUser";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={PetList} />
        <Route path="/edit/:id" component={EditPet} />
        <Route path="/create" component={AddPet} />
        <Route path="/user" component={CreateUser} />
        <Route path="/info/:id" component={PetInfo} />
      </div>
    </Router>
  );
}

export default App;
