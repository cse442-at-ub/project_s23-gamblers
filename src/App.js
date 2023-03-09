import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditWindow from "./component/EditWindow";
import EditHome from './component/EditHome';
function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/editpage">editpage</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/editpage" element={<EditHome/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
