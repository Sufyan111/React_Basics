// import logo from './logo.svg';
// import './App.css';
import { Navigation } from './Components/A_HeaderSection/Navigation';
import {BodySection} from './Components/B_BodySection/BodySection';
import {FooterSection} from './Components/C_FooterSection/FooterSection';
import {GridLayout} from './Components/D_Layout/GridLayout'

function App() {
  return (
    <div className="App">
    
        {/* <Navigation />
        <BodySection />
        <FooterSection />
         */}

         <GridLayout/>
        </div>
  );
}

export default App;
