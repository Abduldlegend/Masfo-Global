// import { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { Menu, X, Coins, User, LogOut } from 'lucide-react'
// import { Button } from '../common/Button'

// export const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false)
//     const [isScrolled, setIsScrolled] = useState(false)
//     const [isAuthenticated, setIsAuthenticated] = useState(false)
//     const navigate = useNavigate()

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50)
//         }
//         window.addEventListener('scroll', handleScroll)

//         // Check if user is logged in
//         // const token = localStorage.getItem('token')
//         // setIsAuthenticated(!!token)

//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     const handleLogout = () => {
//         localStorage.removeItem('token')
//         localStorage.removeItem('user')
//         setIsAuthenticated(false)
//         navigate('/')
//     }

//     const navLinks = [
//         { name: 'Home', href: '/' },
//         { name: 'Courses', href: '/courses' },
//         { name: 'Jobs', href: '/jobs' },
//         { name: 'About', href: '/about' },
//         { name: 'Contact', href: '/contact' },
//     ]

//     return (
//         <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
//             }`}>
//             <div className="container-custom">
//                 <div className="flex justify-between items-center">
//                     {/* Logo */}
//                     <Link to="/" className="flex items-center space-x-2">
//                         <Coins className="h-8 w-8 text-primary-600" />
//                         <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
//                             MASFO GLOBAL
//                         </span>
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <div className="hidden md:flex items-center space-x-8">
//                         {navLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 to={link.href}
//                                 className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                         {isAuthenticated ? (
//                             <div className="flex items-center space-x-4">
//                                 <Link to="/dashboard">
//                                     <Button variant="outline" size="sm">
//                                         <User className="h-4 w-4 mr-2" />
//                                         Dashboard
//                                     </Button>
//                                 </Link>
//                                 <Button variant="ghost" size="sm" onClick={handleLogout}>
//                                     <LogOut className="h-4 w-4 mr-2" />
//                                     Logout
//                                 </Button>
//                             </div>
//                         ) : (
//                             <div className="flex items-center space-x-4">
//                                 <Link to="/login">
//                                     <Button variant="ghost" size="sm">Login</Button>
//                                 </Link>
//                                 <Link to="/register">
//                                     <Button size="sm">Get Started</Button>
//                                 </Link>
//                             </div>
//                         )}
//                     </div>

//                     {/* Mobile menu button */}
//                     <button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
//                     >
//                         {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                     </button>
//                 </div>

//                 {/* Mobile Navigation */}
//                 {isOpen && (
//                     <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-up">
//                         {navLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 to={link.href}
//                                 className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
//                                 onClick={() => setIsOpen(false)}
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                         {isAuthenticated ? (
//                             <>
//                                 <Link to="/dashboard" onClick={() => setIsOpen(false)}>
//                                     <Button variant="outline" fullWidth>Dashboard</Button>
//                                 </Link>
//                                 <Button variant="ghost" fullWidth onClick={handleLogout}>Logout</Button>
//                             </>
//                         ) : (
//                             <div className="space-y-3 pt-2">
//                                 <Link to="/login" onClick={() => setIsOpen(false)}>
//                                     <Button variant="outline" fullWidth>Login</Button>
//                                 </Link>
//                                 <Link to="/register" onClick={() => setIsOpen(false)}>
//                                     <Button fullWidth>Get Started</Button>
//                                 </Link>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </nav>
//     )
// }

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Coins, User, LogOut } from 'lucide-react'
import { Button } from '../common/Button'
import toast from 'react-hot-toast'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('accessToken')
      setIsAuthenticated(!!token)
    }
    
    checkAuth()
    
    window.addEventListener('storage', checkAuth)
    return () => window.removeEventListener('storage', checkAuth)
  }, [])

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('accessToken')
      if (token) {
        await fetch('http://localhost:5000/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      }
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('user')
      setIsAuthenticated(false)
      navigate('/')
      toast.success('Logged out successfully')
    }
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              MASFO GLOBAL
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="ghost" size="sm">Login</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Get Started</Button>
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" fullWidth>Dashboard</Button>
                </Link>
                <Button variant="ghost" fullWidth onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <div className="space-y-3 pt-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" fullWidth>Login</Button>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button fullWidth>Get Started</Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}