import "./App.css";
import RightSideBar from "./RightSideBar";
import React from "react";
import Header from "./Header";
import Tiles from "./Components/Tiles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Employess from "./Components/Employess";
import Sales from "./Components/Sales";

function App() {
  return (
    <div className="app-container">
    <Router>
      <Header />
      <div className="main-layout">
        <RightSideBar />
        <div className="content">
          <Routes>
            <Route path="/Tiles" element={<Tiles />} />
            <Route path="/Employess" element={<Employess />} />
            <Route path="/Sales" element={<Sales /> } />
          </Routes>
         
        </div>
      </div>
    </Router>
  </div>
  );
}

export default App;
