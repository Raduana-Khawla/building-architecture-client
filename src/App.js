import { Toaster } from "react-hot-toast";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Components/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Pages/Shared/Footer/Footer";
import Institute from "./Pages/Design/Institute/Institute";
import ApartmentBooking from "./Pages/Apartment/ApartmentBooking";
import Religious from "./Pages/Design/Religious/Religious";
import House from "./Pages/Design/House/House";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import News from "./Pages/News/News";

function App() {
  return (
    <div className="mx-auto">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/institute">
              <Institute></Institute>
            </Route>
            <Route path="/religious">
              <Religious></Religious>
            </Route>
            <Route path="/apartmentBooking">
              <ApartmentBooking></ApartmentBooking>
            </Route>
            <Route path="/house">
              <House></House>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
