// import { Routes, Route } from 'react-router-dom'
// import { Layout } from './components/Layout/Layout'
// import { Home } from './pages/Home'
// import { Login } from './pages/Login'
// import { Register } from './pages/Register'
// import { Dashboard } from './pages/Dashboard'
// import { Courses } from './pages/Courses'
// import { CourseDetail } from './pages/CourseDetail'
// import { About } from './pages/About'
// import { Contact } from './pages/Contact'
// import { Jobs } from './pages/Jobs'
// import { JobDetail } from './pages/JobDetail'


// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="courses" element={<Courses />} />
//         <Route path="courses/:slug" element={<CourseDetail />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="jobs" element={<Jobs />} />
//         <Route path="jobs/:slug" element={<JobDetail />} />
//       </Route>
//     </Routes>
//   )
// }

// export default App

import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { Courses } from './pages/Courses'
import { CourseDetail } from './pages/CourseDetail'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Jobs } from './pages/Jobs'
import { JobDetail } from './pages/JobDetail'
import { AdminDashboard } from './pages/AdminDashboard'

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('accessToken')
  const location = useLocation()

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:slug" element={<CourseDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:slug" element={<JobDetail />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  )
}

export default App