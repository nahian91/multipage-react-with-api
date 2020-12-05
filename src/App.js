import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css'
import Header from '../src/components/Header'
import Bannar from './components/Bannar'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Header/>
      <Bannar/>
      <About/>
    </div>
  );
}

export default App;
