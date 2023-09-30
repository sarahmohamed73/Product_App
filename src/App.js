import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Router from "./Router/Router";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container my-5">
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
