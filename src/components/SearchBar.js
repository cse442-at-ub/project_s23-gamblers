import {Form} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SearchBar.css"
function SearchBar(){
    return (
        
        <div>
        <Form >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="mt-2 me-2 search-bar serach_input"
                    aria-label="Search"
                  /> 
        </Form>
        </div>
    )
}
export default SearchBar