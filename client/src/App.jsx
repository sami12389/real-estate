import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home, Profile, SignIn, SignOut, About} from "./pages/index"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}>HOME</Route>
        <Route path = "/about" element = {<About/>}>ABOUT</Route>
        <Route path = "/profile" element = {<Profile/>}>PROFILE</Route>
        <Route path = "/signin" element = {<SignIn/>}>SIGN-IN</Route>
        <Route path = "/signout" element = {<SignOut/>}>SIGN-OUT</Route>
      </Routes>
    </Router>
  )
}

export default App
