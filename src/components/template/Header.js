import React ,{ Component }  from 'react'
import { Link } from 'react-router';
import { Button, Nav, NavDropdown, NavItem, MenuItem, Navbar } from 'react-bootstrap';

export default class Header extends Component {

  render() {
    return (
        <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to='List'>My List App</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                <NavItem eventKey="1" href="#/List">NavItem 1 content</NavItem>
                <NavItem eventKey="2" title="#">NavItem 2 content</NavItem>
                <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
                <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                    <MenuItem eventKey="4.1">Action</MenuItem>
                    <MenuItem eventKey="4.2">Another action</MenuItem>
                    <MenuItem eventKey="4.3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4.4">Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
  }
}
