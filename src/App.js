import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Aftertest, Beforetest, Disease, Home, NailDetect, Skill, Videopage } from './components/pagemange';
import './design.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/final-naildisease" element ={<Home/>} />
          <Route path="/final-naildisease/disease" element ={<Disease/>} />
          <Route path="/final-naildisease/skill" element ={<Skill/>} />
          <Route path="/final-naildisease/video" element ={<Videopage/>} />
          <Route path="/final-naildisease/beforetest" element ={<Beforetest/>} />
          <Route path="/final-naildisease/aftertest" element ={<Aftertest/>} />
          <Route path="/final-naildisease/detect" element ={<NailDetect/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
