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
import Unknown from "./pages/404/Unknown";
import AdminPanel from "./pages/admin-panel/AdminPanel";
import Header from "./components/header/Header";
import React from "react";

function App() {
    const {user} = useSelector(state => state.userReducer);

    return (
        <React.Fragment>
            <Header/>
            <Routes>
                <Route
                    path="*"
                    element={<Navigate to="/unknown" replace />}
                />
                <Route path="/login" element={user ? <Navigate replace to='/'/> : <Login/>}/>
                <Route path="/register" element={user ? <Navigate replace to='/'/> : <Register/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/report" element={user ? <Report/> : <Navigate replace to='/login'/>}/>
                <Route path="/posts/:post" element={<Post/>}/>
                <Route path="/activation/:code" element={<Activation/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/unknown" element={<Unknown/>}/>
                <Route path="/profile" element={user ?  <Profile/> : <Navigate replace to='/'/>}/>
                <Route path="/profile/edit" element={user ? <ProfileEdit/> : <Navigate replace to='/'/>}/>
                <Route path="/admin-panel" element={user?.role === 'ADMIN' && <AdminPanel/>}/>
            </Routes>
        </React.Fragment>
    );
}

export default App;
