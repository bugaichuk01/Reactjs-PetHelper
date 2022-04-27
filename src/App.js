import './style.global.css';
import Login from "./pages/auth/Login";
import {Navigate, Route, Routes} from "react-router-dom";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import {useSelector} from "react-redux";
import PostsPage from "./pages/posts-page/PostsPage";
import Report from "./pages/report/Report";
import Post from "./pages/post/Post";
import Activation from "./pages/activation/Activation";
import Help from "./pages/help/Help";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profile-edit/ProfileEdit";

function App() {
    const {user} = useSelector(state => state.userReducer);

    return (
            <Routes>
                <Route path="/login" element={user ? <Navigate replace to='/'/> : <Login/>}/>
                <Route path="/register" element={user ? <Navigate replace to='/'/> : <Register/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/report" element={user ? <Report/> : <Navigate replace to='/login'/>}/>
                <Route path="/posts/:post" element={<Post/>}/>
                <Route path="/activation/:code" element={<Activation/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/profile" element={user ?  <Profile/> : <Navigate replace to='/'/>}/>
                <Route path="/profile/edit" element={user ? <ProfileEdit/> : <Navigate replace to='/'/>}/>
            </Routes>
    );
}

export default App;
