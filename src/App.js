import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './component/header/header';
import Home from './Page/home/home';
import Movielist from './component/movielist/Movielist';
import Movie from './Page/movieDetail/movie';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='movie/:id' element = {<Movie/>}/>
          <Route path='movies/:type' element = {<Movielist/>}/>
          <Route path='/*' element = {<h1> Error Page</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
