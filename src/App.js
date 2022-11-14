import TopBar from './components/topbar/TopBar'

import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Contact from './components/pages/contact/Contact';
import About from './components/pages/About/About';
import Home from './components/pages/home/Home';


function App() {
  const { user } = useContext(Context);
  return (
    
    <Router>      
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<Home/>} />   
        <Route exact path="/contact" element={<Contact />} />   
        <Route exact path="/about" element={<About />} />   
        <Route exact path="/register" element= {user ? <Home /> : <Register />} />
        <Route exact path="/login" element = {user ? <Home /> : <Login />} />
        <Route exact path="/post/:id" element= {<Single />} />
        <Route exact path="/write" element= {user ? <Write /> : <Login />} />
        <Route exact path="/settings" element= {user ? <Settings /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
