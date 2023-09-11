import './App.css';
import './ProfileImg.js'
import ProfileImg from './ProfileImg.js';
import SocialLinks from './SocialLinks';
import About from './About';

function App() {
  return (
    <div className="App">
      <ProfileImg/>
      <About />
      <SocialLinks />
    </div>
  );
}

export default App;
