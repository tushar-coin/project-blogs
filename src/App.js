import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar"
import Home from "./Home"
import Create from "./Create"
import Blogdetails from './Blogdetails';

function App() {
  const title = "hello";
  const like = 50;   // does not matter data type bcoz react comvert everything to string before rendering
  const person = { name: 'yoshi', age: 30 };
  // boolean and object cant be rendered
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />
        <div className="content">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blog/:id' element={<Blogdetails />} />
          </Routes>
        </div>



      </div >
    </BrowserRouter>

  );
}

export default App;
