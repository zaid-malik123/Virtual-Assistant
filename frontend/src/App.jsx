import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Customize from "./pages/Customize"
import Home from "./pages/Home"
import { useContext } from "react"
import { UserData } from "./context/UserContext"
import ProtectedRoute from "./component/ProtectedRoute"
import Customize2 from "./pages/Customize2"

export const serverUrl = "http://localhost:3000"

const App = () => {
  const { user } = useContext(UserData)
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/customize" element={<ProtectedRoute><Customize /></ProtectedRoute>} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute >} />
        <Route path="/customize2" element={<ProtectedRoute><Customize2 /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App
