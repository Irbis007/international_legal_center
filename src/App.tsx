import "./App.css";
import {
  Benefits,
  Boss,
  Header,
  Intro,
  SecondSection,
  StartEasy,
  Tariffs,
  Forecasts,
  Partner,
  Footer,
} from "./components";


function App() {
  return (
    <div className="main-container">
      <Header />
      <Intro />
      <SecondSection />
      <Benefits />
      <Tariffs />
      <Partner />
      <StartEasy />
      <Forecasts />
      <Boss/>
      <Footer/>
    </div>
  );
}

export default App;
