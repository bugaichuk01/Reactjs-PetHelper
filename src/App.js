import './main.css';
import Login from "./pages/login/Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from "./pages/register/Register";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    );
}

export default App;
