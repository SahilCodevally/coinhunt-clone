import "./App.css";
// import Home from "./view/Home/Home";
import Routes from "./routes";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
