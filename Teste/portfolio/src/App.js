import logo from './logo.svg';
import './App.css';


import './styles/Reset.css' 
import './styles/Global.css' 

// import './styles/general.css';
// import './styles/Header.css';
// import './styles/TopSection.css';
// import './styles/MiddleSection.css';
// import './styles/Footer.css';

import HeaderReact from './components/Header';

import TopSection from './components/TopSection';

import CarrousselSection from './components/CarrousselSection';

import TechnologySection from './components/TechnologySection';

import OthersSection from './components/JobsSection';

import ContactSection from './components/ContactSection';


import Footer from './components/Footer';

function App() {
  return (
    <div className='body'>

      <TopSection/>
    
      <CarrousselSection/>

      <TechnologySection/>

      <OthersSection/>

      <ContactSection/>
  
    </div>
  );
}


export default App;
