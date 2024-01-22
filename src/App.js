import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from 'react-router-dom'
import Userlogin from './components/Userlogin';
import Navbar from './components/Navbar';
import Usersignup from './components/Usersignup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Userlogin/>} />
        <Route path='signup' element={<Usersignup/>} />
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
