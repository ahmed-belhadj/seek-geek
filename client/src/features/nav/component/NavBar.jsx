import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logOut } from "../../auth/store/action";
import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSignOut = e => {
    e.preventDefault();
    this.props.onLogOut();
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavLink
            to="/"
            activeStyle={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "#4D4D4D"
            }}
          >
            Job Matcher
          </NavLink>
          {this.props.authenticatoin_succeed && (
            <Nav className="ml-auto" navbar>
              {this.props.currentUser &&
              this.props.currentUser.is_seeker &&
              !this.props.currentUser.is_employer ? (
                <NavItem>
                  <NavLink
                    to="/components/"
                    activeStyle={{
                      margin: "2px"
                    }}
                  >
                    Free Apps:{this.props.currentUser.free_apps}
                  </NavLink>
                </NavItem>
              ) : null}

              {this.props.currentUser &&
              this.props.currentUser.is_employer &&
              !this.props.currentUser.is_seeker ? (
                <>
                  <NavItem>
                    <NavLink
                      to="/components/"
                      activeStyle={{
                        margin: "2px"
                      }}
                    >
                      Postings Availible:{this.props.currentUser.postings}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/components/"
                      activeStyle={{
                        margin: "2px"
                      }}
                    >
                      Free Calls:{this.props.currentUser.free_calls}
                    </NavLink>
                  </NavItem>
                </>
              ) : null}
              <NavItem>Hi {this.props.currentUser.first_name}</NavItem>
              <NavItem>
                <NavLink
                  to="/components/"
                  activeStyle={{
                    margin: "2px"
                  }}
                >
                  Free Apps:{" "}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="give a path"
                  activeStyle={{
                    margin: "2px"
                  }}
                >
                  Balance credits:{this.props.currentUser.credits}
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/">Home</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/profile">My Profile</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Matches">Matches</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Messages">Messages</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Billing">Billing</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/view">View</Link>
                  </DropdownItem>
                  {this.props.currentUser &&
                  this.props.currentUser.is_employer &&
                  !this.props.currentUser.is_seeker ? (
                    <DropdownItem>
                      <Link to="/Job">Job</Link>
                    </DropdownItem>
                  ) : null}
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/" onClick={this.handleSignOut}>
                      Sign Out
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          )}
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.user
  };
}

const mapDispatchToProps = dispatch => ({
  onLogOut: user => {
    dispatch(logOut());
  }
});

const ConnectedNavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default class Wrapper extends React.Component {
  render() {
    return <ConnectedNavBar />;
  }
}
