import './main.css';
import Login from "./pages/login/Login";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import {useSelector} from "react-redux";
import Report from "./pages/report/Report";

function App() {
    const {user} = useSelector(state => state.userReducer);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={user ? <Navigate replace to='/'/> : <Login/>}/>
                <Route path="/register" element={user ? <Navigate replace to='/'/> : <Register/>}/>
                <Route path="/" element={user ? <Home/> : <Login/>}/>
                <Route path="/report" element={user ? <Report/> : <Login/>}/>
            </Routes>
        </Router>
    );
}

export default App;
