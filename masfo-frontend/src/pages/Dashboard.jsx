import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BookOpen, Briefcase, Award, TrendingUp, Clock, ChevronRight } from 'lucide-react'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { authAPI, courseAPI, applicationAPI } from '../services/api'
import toast from 'react-hot-toast'

export const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [enrollments, setEnrollments] = useState([])
  const [applications, setApplications] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const loadUserData = async () => {
      setIsLoading(true)
      try {
        const userResponse = await authAPI.getMe()
        setUser(userResponse.data.data.user)
        
        try {
          const enrollmentsResponse = await courseAPI.getMyEnrollments()
          setEnrollments(enrollmentsResponse.data.data.enrollments || [])
        } catch (err) {
          console.error('Error loading enrollments:', err)
        }
        
        try {
          const applicationsResponse = await applicationAPI.getMyApplications()
          setApplications(applicationsResponse.data.data.applications || [])
        } catch (err) {
          console.error('Error loading applications:', err)
        }
        
      } catch (error) {
        console.error('Error loading user data:', error)
        if (error.response?.status === 401) {
          navigate('/login')
        }
        toast.error('Failed to load dashboard data')
      } finally {
        setIsLoading(false)
      }
    }
    
    loadUserData()
  }, [navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const stats = [
    { label: 'Courses Enrolled', value: enrollments.length, icon: BookOpen, color: 'bg-primary-100 text-primary-600' },
    { label: 'Certificates Earned', value: enrollments.filter(e => e.certificateIssued).length, icon: Award, color: 'bg-green-100 text-green-600' },
    { label: 'Job Applications', value: applications.length, icon: Briefcase, color: 'bg-blue-100 text-blue-600' },
    { label: 'Learning Hours', value: Math.floor(enrollments.reduce((acc, e) => acc + (e.progress || 0), 0) / 10), icon: Clock, color: 'bg-orange-100 text-orange-600' },
  ]

  const recentCourses = enrollments.slice(0, 3).map(enrollment => ({
    id: enrollment.courseId?._id,
    title: enrollment.courseId?.title || 'Course',
    progress: enrollment.progress || 0,
    lastAccessed: enrollment.updatedAt ? new Date(enrollment.updatedAt).toLocaleDateString() : 'Recently'
  }))

  const recommendedJobs = [
    { id: 1, title: 'Junior Blockchain Developer', company: 'Web3 Nigeria', salary: '₦300k - ₦500k' },
    { id: 2, title: 'Crypto Community Manager', company: 'DeFi Africa', salary: '₦250k - ₦400k' },
    { id: 3, title: 'Smart Contract Auditor', company: 'SecureChain', salary: '₦500k - ₦800k' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name || 'Student'}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Continue your crypto learning journey and track your progress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">My Recent Courses</h2>
              <Link to="/my-courses" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentCourses.length > 0 ? recentCourses.map((course) => (
                <Card key={course.id} className="p-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Last accessed: {course.lastAccessed}</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold text-primary-600">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <Link to={`/courses/${course.id}`}>
                      <Button size="sm">
                        Continue
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              )) : (
                <Card className="p-8 text-center">
                  <p className="text-gray-500">You haven't enrolled in any courses yet.</p>
                  <Link to="/courses" className="mt-3 inline-block">
                    <Button size="sm">Browse Courses</Button>
                  </Link>
                </Card>
              )}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Recommended Jobs</h2>
              <Link to="/jobs" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {recommendedJobs.map((job) => (
                <Card key={job.id} className="p-5 hover:shadow-lg transition">
                  <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                  <p className="text-sm text-green-600 font-medium mb-3">{job.salary}</p>
                  <Link to={`/jobs/${job.id}`}>
                    <Button variant="outline" size="sm" fullWidth>
                      Apply Now
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>

            <Card className="p-5 mt-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
              <div className="text-center">
                <TrendingUp className="h-10 w-10 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Complete Your Profile</h3>
                <p className="text-sm opacity-90 mb-3">
                  Add your skills and experience to get better job matches
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Update Profile
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}