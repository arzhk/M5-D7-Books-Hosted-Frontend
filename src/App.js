import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import JumboBanner from "./components/JumboBanner";
import SaleBanner from "./components/SaleBanner";

const App = () => {
  const [showBasket, setShowBasket] = React.useState(false);

  const showBasketHandler = (booleanState) => {
    setShowBasket(booleanState);
  };

  return (
    <Router>
      <SaleBanner />
      <NavBar showBasketHandler={showBasketHandler} showBasket={showBasket} />
      <JumboBanner />
      <Container>
        <Row>
          <BookList />
        </Row>
      </Container>
    </Router>
  );
};

export default App;
