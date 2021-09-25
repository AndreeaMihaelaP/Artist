import "../styles.css";
import { Route, Switch } from "react-router-dom";
import Gallery from "../components/Gallery";
import Exhibitions from "../components/Exhibitions";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import NavigationBar from "../components/NavigationBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/gallery" component={Gallery} />
        <Route path="/exhibitions" component={Exhibitions} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
