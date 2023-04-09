import 'bootstrap/dist/css/bootstrap.min.css';
import "./SearchBar.css"
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/search', {
        searchText,
      });

      // Handle the response as needed (e.g., update your component state, navigate to a new page, etc.)
      console.log(response.data);
    } catch (error) {
      // Handle the error as needed (e.g., display an error message, log it, etc.)
      console.error('Error while submitting search:', error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="mt-2 me-2 search-bar serach_input"
          aria-label="Search"
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <Button type="submit" className="mt-2 me-2">
          Search
        </Button>
      </Form>
    </div>
  );
}

export default SearchBar;
