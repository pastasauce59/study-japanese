import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from "./Components/NavigationBar";
import HiraganaCharacters from './Components/HiraganaCharacters';
import HiraganaStudy from './Components/HiraganaStudy';

function App() {
  return (
    <div className="App">
      <div className='circle'></div>
      <NavigationBar />

      <Routes>
        <Route exact path='/hiragana' element={<HiraganaCharacters />} />
        <Route exact path='/hiragana/study' element={<HiraganaStudy />} />
      </Routes>
    </div>
  );
}

export default App;
