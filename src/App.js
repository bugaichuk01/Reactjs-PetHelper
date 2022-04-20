import './style.global.css';
import Login from "./pages/auth/Login";
import {Navigate, Route, Routes} from "react-router-dom";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import {useSelector} from "react-redux";
import PostsPage from "./pages/posts-page/PostsPage";
import Report from "./pages/report/Report";
import Post from "./pages/post/Post";

function App() {
    const {user} = useSelector(state => state.userReducer);

    return (
            <Routes>
                <Route path="/login" element={user?.user ? <Navigate replace to='/'/> : <Login/>}/>
                <Route path="/register" element={user?.user ? <Navigate replace to='/'/> : <Register/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/report" element={user ? <Report/> : <Navigate replace to='/login'/>}/>
                <Route path="/posts/:post" element={<Post/>}/>
            </Routes>
    );
}

export default App;
