import { Route, Switch } from "react-router-dom";

import Gallery from "../gallery/Gallery";
import Exhibitions from "../exhibitions/Exhibitions";
import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/gallery" component={Gallery} />
      <Route path="/exhibitions" component={Exhibitions} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
