import React from "react";
import "./RightSidebar.css";
import { CDBSidebar } from "cdbreact";
import {
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
  CDBIcon,
} from "cdbreact";
import { Link } from "react-router-dom";

function RightSideBar() {
  return (
    <CDBSidebar className="custom-sidebar" textColor="white">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        Sidebar
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>

          <CDBSidebarMenuItem icon="th-large">
            <Link to="/Tiles">Dashboard</Link>
          </CDBSidebarMenuItem>

          <CDBSidebarMenuItem icon="sticky-note">
            <Link to="/Employess">Employess</Link></CDBSidebarMenuItem>
         
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
           <Link to="/Sales">Sales</Link> 
           
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
    </CDBSidebar>
  );
}

export default RightSideBar;
