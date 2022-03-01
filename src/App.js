import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from "./Components/NavigationBar";
import Hiragana from './Components/Hiragana';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route exact path='/hiragana' element={<Hiragana />} />
      </Routes>
    </div>
  );
}

export default App;
