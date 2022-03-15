import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import Genel from './pages/Genel';
function App() {
  return (
    <div className="App">
      <Navi/>
      <Dashboard/>
    </div>
  );
}

export default App;
