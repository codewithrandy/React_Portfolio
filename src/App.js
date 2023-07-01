import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Divider from './components/Divider';
import Footer from './components/Footer';
import MobilePortfolio from './components/MobilePortfolio';
import WebAppPortfolio from './components/WebAppPortfolio';
import SitePortfolio from './components/SitePortfolio';
import ShowcaseProject from './components/ShowcaseProject';

function App() {
  return (
    <div className="App">
      <Header style={{ background: '#e3f2fd'}}/>
      <Hero />
      <Divider />
      <ShowcaseProject />
      <Divider />
      <MobilePortfolio />
      <Divider />
      <WebAppPortfolio />
      <SitePortfolio />
      <Divider />
      <About />
      <Footer />
    </div>
  );
}

export default App;
