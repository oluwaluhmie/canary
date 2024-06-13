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
import Culture from "./Pages/Culture";
import Services from "./Pages/Services";
import Investments from "./Pages/Investments";
import ScrollToTop from "./Components/ScrollToTop";
import Loans from "./Pages/Loans";
import Account from "./Pages/Account";
import Individual from "./Pages/Individual";
import Complete from "./Pages/AccountOpening/Complete";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/culture" element={<Culture />} />
        <Route path="/services" element={<Services />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/account" element={<Account />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
