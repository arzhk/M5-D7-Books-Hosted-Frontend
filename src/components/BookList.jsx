import React from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import CommentsSection from "./CommentsSection";
import SingleBook from "./SingleBook";

export default class BookList extends React.Component {
  state = {
    books: [],
    isFiltered: false,
    selectedBookID: null,
    selectedBookImage: null,
  };

  fetchBooksHandler = async () => {
    try {
      const response = await fetch("https://m5-d7-arzhk-books-backend.herokuapp.com/books", {
        method: "GET",
      });

      const data = await response.json();
      this.setState({ books: data });
    } catch (error) {
      console.log(error);
    }
  };

  filterBooks = async (filterQuery) => {
    if (filterQuery.length > 0) {
      await this.fetchBooksHandler();
      let filteredBooks = this.state.books.filter((e) => e.title.toLowerCase().includes(filterQuery.toLowerCase()));
      this.setState({ books: filteredBooks, isFiltered: true });
    } else {
      this.fetchBooksHandler();
    }
  };

  selectBook = (id, imageUrl) => {
    this.setState({ selectedBookID: id, selectedBookImage: imageUrl });
  };

  componentDidMount = () => {
    this.fetchBooksHandler();
  };

  render() {
    return (
      <Container>
        {this.state.selectedBookID && (
          <CommentsSection
            selectedBookID={this.state.selectedBookID}
            selectedBookImage={this.state.selectedBookImage}
            isLoading={true}
          />
        )}
        <Row className="mb-4">
          <Col xs={6}>
            <h2>Filter Books</h2>
            <FormControl
              placeholder="Filter books by title..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => this.filterBooks(e.target.value)}
            />
            <p
              className={
                this.state.isFiltered && this.state.books.length === 0
                  ? "d-block badge badge-danger mt-2 py-2"
                  : "d-none"
              }
            >
              No books found
            </p>
          </Col>
        </Row>
        <Row>
          {this.state.books.slice(0, 48).map((e, index) => (
            <Col key={index} className="mb-4" xs={3}>
              <SingleBook book={e} selectBook={this.selectBook} isSelected={this.state.selectedBookID === e.asin} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
