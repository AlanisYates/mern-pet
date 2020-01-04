import React from "react";
// React Router is used to ctalk to the backend and the routes created.
import { BrowserRouter as Router, Route } from "react-router-dom";
// Imported bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// // Importing the Components
// import Navbar from "./components/Navbar.component";
// import ExerciseList from "./components/exercises-list.component";
// import EditExercise from "./components/edit-exercises.component";
// import CreateExercise from "./components/create-exercises.component";
// import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>This is working</h1>
        {/* All the components are below */}
        <Navbar />
        <br />
        {/* React router help us route the url path and data to that path */}
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
