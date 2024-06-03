import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Story from "./Pages/Story";
import Terms from "./Pages/Terms";
import Policy from "./Pages/Policy";
import Contact from "./Pages/Contact";
import Teams from "./Pages/Teams";
import TeamsContent from "./Pages/Teams/TeamsContent";
import Blog from "./Pages/Blog";
import BlogArticle from "./Pages/Blog/BlogArticle";
import BlogContent from "./Pages/Blog/BlogContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/ourstory" element={<Story />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teams/*" element={<Teams />} />
        <Route path="/management" element={<TeamsContent tab="management" />} />
        <Route path="/directors" element={<TeamsContent tab="directors" />} />
        <Route path="*" element={<Teams />} /> {/* Default Route */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<BlogArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
