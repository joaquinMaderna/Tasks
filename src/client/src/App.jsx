
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.jsx"

import RegisterPage from "./pages/registerPage.jsx"
import LoginPage from "./pages/LoginPage"
import TaskPage from "./pages/TaskPage.jsx"
import TaskFormPage from "./pages/TaskFormPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import ProfileTask from "./pages/ProfileTask.jsx"

import ProtectedRoutes from "./ProtectedRoutes.jsx"

function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />

          <Route element={<ProtectedRoutes/>} >
            <Route path="/tasks" element={<TaskPage/>} />
            <Route path="/task/new" element={<TaskFormPage/>} />
            <Route path="/tasks/:id" element={<TaskFormPage/>} />
            <Route path="/profile" element={<ProfileTask/>} />
          </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App