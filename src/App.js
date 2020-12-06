import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css'
import Header from '../src/components/Header'
import Bannar from './components/Bannar'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services';
import Counter from './components/Counter';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Header/>
      <Bannar/>
      <About/>
      <Skills/>
      <Services/>
      <Counter/>
      <Team/>
    </div>
  );
}

export default App;
