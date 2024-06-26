import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Complete from "./Pages/AccountOpening/Individual/Complete";
import Ccomplete from "./Pages/AccountOpening/Corporate/Ccomplete";
import Corporate from "./Pages/Corporate";
import Admin from "./Pages/Admin";
import CentralAdmin from "./Pages/CentralAdmin";
import SubscriptionList from "./Pages/Admin/SubscriptionList";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import ContactPage from "./Pages/Admin/ContactPage";
import ContactList from "./Pages/Admin/ContactList";
import CorporatePage from "./Pages/Admin/CorporatePage";
import CorporateList from "./Pages/Admin/CorporateList";
import IndividualPage from "./Pages/Admin/IndividualPage";
import IndividualList from "./Pages/Admin/IndividualList";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourstory" element={<Story />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teams/*" element={<Teams />} />
        <Route path="/management" element={<TeamsContent tab="management" />} />
        <Route path="/directors" element={<TeamsContent tab="directors" />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<BlogArticle />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/services" element={<Services />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/account" element={<Account />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/corporatecomplete" element={<Ccomplete />} />
        <Route path="/individual-account" element={<Individual />} />
        <Route path="/corporate-account" element={<Corporate />} />
        <Route path="/accesscontrol" element={<Admin />} />
        <Route path="/adminaccess/*" element={<CentralAdmin />} />
        <Route path="/subscriptions" element={<SubscriptionList />} />
        <Route path="/contactus" element={<ContactList />} />
        <Route path="/contactus/:id" element={<ContactPage />} />
        <Route path="/individual" element={<IndividualList />} />
        <Route path="/individual/:id" element={<IndividualPage />} />
        <Route path="/corporate" element={<CorporateList />} />
        <Route path="/corporate/:id" element={<CorporatePage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
