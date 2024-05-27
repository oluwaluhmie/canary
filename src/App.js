import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Story from "./Pages/Story";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Story />
            </>
          }
        />
        <Route path="/ourstory" element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
