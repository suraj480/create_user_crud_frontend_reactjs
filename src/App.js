import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './component/CreateUser';
import ViewUser from './component/ViewUser';
import NavBar from './component/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>

        <Routes>
          <Route path='/createUser' Component={CreateUser} />
          <Route path='/viewAllUser' Component={ViewUser} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
