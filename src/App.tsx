import React from "react"
import {Routes, Route} from "react-router-dom"
import AdminRequestsPage from "./pages/AdminRequestsPage/AdminRequestsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RequestFormPage from "./pages/RequestFormPage/RequestFormPage";
import Layout from "./components/Header";

function App() {
    return (
        <Routes>
            // AuthMiddleware that will redirect to posts or login
            <Route path='/' element={<Layout/>}>
                <Route path="/" element={<h1>App</h1>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/posts/:postId" element={<PostDetailPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/profile/:profileId" element={<ProfilePage/>}/>
                <Route path="/requests" element={<AdminRequestsPage/>}/>
                <Route path="/requestPost" element={<RequestFormPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<RegisterPage/>}/></Route>
        </Routes>
    );
}

export default App;
