
import 'jquery-validation';
import 'bxslider/dist/jquery.bxslider.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'swiper/css';
import 'swiper/css/pagination';
import 'animate.css';
import './App.css';
import Notification from './components/toaster/Notification';
import Home from './pages/Home';
import ScriptLoader from './components/ScriptLoader';

function App() {
  return (
    <div className="App">
            <ScriptLoader />
      <Notification/>
      <Home/>
    </div>
  );
}

export default App;
