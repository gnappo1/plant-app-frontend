import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import PlantCard from "./components/PlantCard"
import PlantForm from "./components/PlantForm"
import UserProfile from "./components/UserProfile"
import PlantsContainer from "./containers/PlantsContainer"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header slogan="get green!" storename="The botanist fabulous world!"/>
        <Switch>
          <Route path="/plants/new">
            <PlantForm />
          </Route>

          <Route path="/plants/new">
            <PlantForm />
          </Route>
          <Route path="/plants/:id">
            <PlantCard />
          </Route>
          <Route path="/plants">
            <PlantsContainer />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
