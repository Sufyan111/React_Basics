// import logo from './logo.svg';
import './App.css';
import { Navigation } from './Components/A_HeaderSection/Navigation';
import {BodySection} from './Components/B_BodySection/BodySection';
import {FooterSection} from './Components/C_FooterSection/FooterSection';

function App() {
  return (
    <div className="App">
    
        <Navigation />
        <BodySection />
        <FooterSection />
        
        </div>
  );
}

export default App;
