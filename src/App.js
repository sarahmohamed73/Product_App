import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Router from "./Router/Router";
import './App.css';
import { useState } from "react";
import { LanguageContext } from "./Context/Language"
import { ThemeContext } from "./Context/Theme"

function App() {
  const [contextLanguage, setContextLanguage] = useState("EN")
  const [contextTheme, setContextTheme] = useState("light")

  return (
    <div className="App">
      <BrowserRouter>
        <div className={`h-100 ${contextLanguage === "AR" ? "text-start" : "text-end"} ${contextTheme == "dark" ? "bg-dark text-light" : "bg-white text-dark"}`} dir={contextLanguage === "AR" ? "rtl" : "ltr"}>
          <LanguageContext.Provider value={{contextLanguage, setContextLanguage}}>
            <ThemeContext.Provider value={{contextTheme, setContextTheme}}>
              <NavBar />
              <div className="container my-5 h-100">
                <Router />
              </div>
            </ThemeContext.Provider>
          </LanguageContext.Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
