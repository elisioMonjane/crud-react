import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/home';
import Alunos from './components/alunos';
import Sobre from './components/sobre';

 function App() {
  return (
    <div className="App">
       <h1>Meu APP REACT JS</h1>
      <BrowserRouter>
        <ul>
              <li><Link to="/">pagina inicial</Link></li>
              <li><Link to="/alunos">alunos</Link></li>
              <li><Link to="/sobre">sobre</Link></li>
        </ul>
        <Routes>
         <Route path="/" index element={<Home/>}></Route>
          <Route path="/alunos" element={<Alunos/>}></Route>
          <Route path="/sobre" element={<Sobre/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
