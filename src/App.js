import Page from "./Page/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./Components/context/ThemeContext";
import Thanks from "./Components/Thanks";
import "./style/__index.scss";
import "./App.css";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/Reactive-Card-Reactjs/" element={<Page />} />
            <Route exact path="ThankYou" element={<Thanks />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
