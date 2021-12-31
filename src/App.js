import "./App.css";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import SlidingNavBar from "./components/SlidingNavBar";
import EmailCTA from "./components/EmailCTA";
import Footer from "./components/Footer";
import Work from "./pages/work";
import About from "./pages/about";
import GrandPlace from "./pages/grand-place";
import Logos from "./pages/logos";
import Lettering from "./pages/lettering";
import Contact from "./pages/contact";
import Success from "./pages/success";
import DimensionalType from "./pages/dimensional-type";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <SlidingNavBar />

      <Switch>
        <Route exact path="/" component={Work} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/grand-place" component={GrandPlace} />
        <Route path="/logos" component={Logos} />
        <Route path="/lettering" component={Lettering} />
        <Route path="/contact" component={Contact} />
        <Route path="/success" component={Success} />
        <Route path="/dimensional-type" component={DimensionalType} />
      </Switch>

      <EmailCTA />
      <Footer />
    </div>
  );
}

export default App;
