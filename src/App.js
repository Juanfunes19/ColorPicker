import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Nav from './componets/Nav';
import Section from './componets/Section';
import ColorPeaker from './componets/ColorPeaker/ColorPeaker';
import Footer from './componets/Footer/Footer';



function App() {
  return (
    <div className="App">
    <Nav />
    <Section />
    < ColorPeaker />
    <Footer />
    </div>
  );
}

export default App;
