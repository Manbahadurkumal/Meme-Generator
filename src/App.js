import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header';
import MemeGenerator from './components/MemeGenerator';
function App() {
  return (
    <div className="App">
      <Header/>
      <MemeGenerator/>
    </div>
  );
}

export default App;
