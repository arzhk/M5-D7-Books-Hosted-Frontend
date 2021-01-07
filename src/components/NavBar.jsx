import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Basket from "./Basket";

const NavBar = (props) => {
  const { showBasket, showBasketHandler } = props;

  return (
    <Container>
      <div className="d-block w-100 text-center py-4 px-3 header-brdr-b">
        <h1 className="m-0 font-weight-bold">Strive Books</h1>
      </div>
      <Navbar id="navbar-main" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <Link to="/new">New</Link>
            <Link to="/bestsellers">Bestsellers</Link>
            <Link to="/fiction">Fiction</Link>
            <Link to="/nonfiction">Non-Fiction</Link>
            <Link to="/childrens">Children's</Link>
          </Nav>
          <div className="d-flex justify-content-center align-items-center">
            <div id="search-bar-container" className="d-inline-block">
              <input id="search-bar" type="text" placeholder="Title, author, keyword..." />
              <i className="fas fa-search"></i>
            </div>
            <div className="ml-3">
              <button
                className="d-flex flex-column align-items-center cart-button"
                onMouseEnter={() => showBasketHandler(true)}
              >
                <i className="fas fa-shopping-cart"></i>
                <small style={{ fontSize: 12, letterSpacing: 1 }}>BASKET</small>
              </button>
            </div>
          </div>
        </Navbar.Collapse>
        {showBasket && <Basket showBasketHandler={showBasketHandler} />}
      </Navbar>
    </Container>
  );
};

export default NavBar;
