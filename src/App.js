import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from "./Components/NavigationBar";
import HiraganaCharacters from './Components/HiraganaCharacters';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route exact path='/hiragana' element={<HiraganaCharacters />} />
      </Routes>
    </div>
  );
}

export default App;
