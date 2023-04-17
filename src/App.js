import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
