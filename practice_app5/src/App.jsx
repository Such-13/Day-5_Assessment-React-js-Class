import './App.css'
import Home from './RouterSample/Home'
import About from './RouterSample/About'
import Contact from './RouterSample/Contact'
import { Link, Route, Routes } from 'react-router-dom'
import Posts from "./useapi/Posts"
import Page from "./use_api_without_useeffect/Page"

import UserHome from "./pages/Home"
import UserProfile from "./pages/UserProfile"

function App() {
  return (
    <>
      <div>
        {/* Navbar */}
        <nav style={{ display: "flex", gap: "15px" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/posts-use">Posts use()</Link>

          <Link to="/users">User Directory</Link>
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts-use" element={<Page />} />

          <Route path="/users" element={<UserHome />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </>
  )
}

export default App