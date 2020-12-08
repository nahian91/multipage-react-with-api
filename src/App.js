import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css'
import AppRoute from '../src/router/AppRoute'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
