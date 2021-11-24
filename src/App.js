import './App.css';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignInAndSignUp/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
