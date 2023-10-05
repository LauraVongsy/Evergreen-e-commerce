import "./App.css"
import Banner from './components/Banner';
import Header from './components/Header';
import Cover from "./components/Cover";
import BestSellers from "./components/BestSellers";
import Carousel2 from "./components/Carousel2"

function App() {

  return (
    <div className="App">
      <Banner />
      <Header />
      <Cover />
      <BestSellers />
      <Carousel2 />
    </div>
  );
}

export default App;
