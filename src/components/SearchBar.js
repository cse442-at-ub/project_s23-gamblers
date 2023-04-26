import 'bootstrap/dist/css/bootstrap.min.css';
import "./SearchBar.css"
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function SearchBar(props) {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  console.log(searchText)
  function handleFormSubmit(event){
    if(searchText===''){
      window.alert('please enter something')
      return
    }
    event.preventDefault();
    axios.post(process.env.REACT_APP_BASENAME+'api/search',{
      keyword: searchText,
    }).then(function(response){
      console.log(response)
      props.setItemData(response.data)
    })
  }

  // function testingHandler(){
  //   props.setItemData([{
  //     title: "testing",
  //     text: 'price: 9999  post date: 2023.3.13',
  //     poster: 'testing'
  //   }])
  // }
  
  let a = window.location.pathname.split('/')
  if (a[a.length-1] != ''){
    return <div></div>
  }else{
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
          <Button type="submit" className="mt-2 me-2" style={{ width: '100%' }} onClick={handleFormSubmit}>
            Search
          </Button>
        </Form>
        {/* <button onClick={testingHandler}>testing</button> */}
      </div>
    );
  }

  
}

export default SearchBar;
