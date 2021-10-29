import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Client from './components/Client/Client';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddServices from './components/AddServices/AddServices';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdateOrders from './components/UpdateOrders/UpdateOrders';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/client'>
              <Client></Client>
            </Route>
            <Route path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/manageOrders'>
              <ManageOrders></ManageOrders>
            </Route>

            <PrivateRoute exact path='/servicedetails/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/addServices'>
              <AddServices></AddServices>
            </Route>
            <Route path="/orders/update/:productId">
              <UpdateOrders></UpdateOrders>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
