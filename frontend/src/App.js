import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Post_job from './components/Post_job';
import Jobs from './components/Jobs';
import Profile from './components/Profile';
import Search_Results from './components/Search_Results';
import EditProfile from './components/EditProfile';
import Chat from './components/Chat/Chat';
import EmailVerify from './components/EmailVerify';
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from "./components/PasswordReset";
import MyJobs from "./components/MyJobs";
import Payment from "./components/Payment"
import Post_Resources from "./components/Post_Resources"
import Resources from "./components/Resources"
function App() {
  const user = localStorage.getItem('token');
  return (
    <Routes>
      {user && <Route path="/" exact element={<Main/>}/>}
      {user && <Route path = "/jobs" exact element={<Jobs/>}/>}
      {user && <Route path = "/profile" exact element={<Profile/>}/>}
      {user && <Route path = "/EditProfile" exact element={<EditProfile/>}/>}
      {user && <Route path = "/postjob" exact element={<Post_job/>}/>}
      {user && <Route path = "/myjobs" exact element={<MyJobs/>}/>}
      {user && <Route path = "/search_results" exact element={<Search_Results/>}/>}
      {user && <Route path = "/payment" exact element={<Payment/>}/>}
      {user && <Route path = "/post_resources" exact element={<Post_Resources/>}/>}
      {user && <Route path = "/resources" exact element={<Resources/>}/>}
      <Route path ="/login" exact element={<Login/>}/>
      <Route path ="/signup" exact element={<Signup/>}/>
      
      <Route path="/" exact element={<Navigate replace to="/signup"/>}/>
      <Route path="/postjob" exact element={<Navigate replace to="/signup"/>}/>
      <Route path="/profile" exact element={<Navigate replace to="/signup"/>}/>
      <Route path="/edit_profile" exact element={<Navigate replace to="/signup"/>}/>
      <Route path="/jobs" exact element={<Navigate replace to="/signup"/>}/>
      
      <Route path="/search_results" exact element={<Navigate replace to="/login"/>}/>
      <Route path="/postjob" exact element={<Navigate replace to="/login"/>}/>
      <Route path="/myjobs" exact element={<Navigate replace to="/login"/>}/>
      <Route path="/profile" exact element={<Navigate replace to="/login"/>}/>
      <Route path="/jobs" exact element={<Navigate replace to="/login"/>}/>
      <Route path="/chat" element={user ? <Chat /> : <Navigate to="../login" />}/>
      <Route path="/resources" exact element={<Navigate replace to="/login"/>}/>
      <Route path="/post_resources" exact element={<Navigate replace to="/login"/>}/>
      <Route path="/users/:id/verify/:token" element={<EmailVerify/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/password-reset/:id/:token" element={<PasswordReset />} />


    </Routes>
  );
}
export default App;

