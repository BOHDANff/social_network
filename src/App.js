import './App.css';
import {Header} from "./Components/Header/Header";
import {Sidebar} from "./Components/Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/profile'
                   element={<Profile />} />
            <Route path='/users'
                   element={<Sidebar />} />
            <Route path='/massages'
                   element={<Sidebar />} />
            <Route path='/settings'
                   element={<Sidebar />} />
        </Routes>
    </div>
  );
}

export default App;
