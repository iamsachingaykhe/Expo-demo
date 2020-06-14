import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
function ExpoNav() {
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">ExpoLead</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href='/about'>About</Nav.Link>
            <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/create-dashboard">Create Dashboard</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/manage-dashboard">Manage Dashboard</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="List" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/create-list">Create List</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/manage-list">Manage List</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Templates" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/create-template">Create Template</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/manage-template">Manage Template</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Campagins" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/create-campagins">Create Campagins</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/manage-campagins">Manage Campagins</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reports" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/5.1">Analytics</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>          
    );
  }
  
  
export default ExpoNav;

