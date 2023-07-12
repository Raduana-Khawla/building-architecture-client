import { Toaster } from "react-hot-toast";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Pages/Shared/Footer/Footer";
import Institute from "./Pages/Design/Institute/Institute";
import Religious from "./Pages/Design/Religious/Religious";
import House from "./Pages/Design/House/House";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import News from "./Pages/News/News";
import RentApartment from "./Pages/Apartment/RentApartment/RentApartment";
import Details from "./Pages/Apartment/Details/Details";
import Tools from "./Pages/Construction/Tools/Tools";
import Laborer from "./Pages/Construction/laborer/Laborer";
import Architect from "./Pages/Construction/Architect/Architect";
import Services from "./Pages/Apartment/Services";
import PrivateRoute from "../src/Components/Shared/PrivateRoute/PrivateRoute";

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
              <Services></Services>
            </Route>
            <Route path="/service/:serviceId">
              <Details></Details>
            </Route>
            <Route path="/apartmentRent">
              <RentApartment></RentApartment>
            </Route>
            <Route path="/house">
              <House></House>
            </Route>
            <Route path="/tools">
              <Tools></Tools>
            </Route>
            <Route path="/laborer">
              <Laborer></Laborer>
            </Route>
            <Route path="/architect">
              <Architect></Architect>
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
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
