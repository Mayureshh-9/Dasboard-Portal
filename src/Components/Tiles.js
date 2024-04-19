import React from "react";
import { CDBBox, CDBContainer } from "cdbreact";
import "./Tiles.css";

function Tiles() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div>
        <CDBContainer>
         <div className="Tiles">
          <CDBBox   bgColor= "dark gray" alignItems="center">
          
          </CDBBox>
          </div>
          <div className="Tiles">
          <CDBBox   bgColor= "dark gray" alignItems="center">
            </CDBBox> 
          </div>
          <div className="Tiles">
          <CDBBox   bgColor= "dark gray" alignItems="center">
            </CDBBox> 
          </div>
          
        </CDBContainer>
      </div>
    </div>
  );
}

export default Tiles;
