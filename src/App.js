import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBox from './components/searchbox';
import Places from './components/places';
import Stays from './components/stays';
import Experiance from './components/experiance';
import Hosts from './components/hosts';

function App() {
  return (
    <div className="container-fluid">
      <SearchBox />
      <Places />
      <Stays />
      <Experiance />
      <Hosts />
    </div>
  );
}

export default App;
