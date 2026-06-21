import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, Briefcase, Users, Mail, 
  Plus, Edit, Trash2, Eye, 
  TrendingUp, MessageCircle, CheckCircle,
  XCircle, Search, Filter, Calendar
} from 'lucide-react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { AdminModal } from '../components/admin/AdminModal';
import { CourseForm } from '../components/admin/CourseForm';
import { JobForm } from '../components/admin/JobForm';
import toast from 'react-hot-toast';
import api from '../services/api';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({});
  const [courses, setCourses] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'course' or 'job'
  const [editingItem, setEditingItem] = useState(null);
  const navigate = useNavigate();

  // Check if user is admin
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      toast.error('Admin access required');
      navigate('/dashboard');
    }
  }, [navigate]);

  // Fetch dashboard data
  useEffect(() => {
    fetchDashboardData();
  }, [activeTab]);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'overview') {
        const statsRes = await api.get('/admin/stats');
        setStats(statsRes.data.data);
      } else if (activeTab === 'courses') {
        const coursesRes = await api.get('/admin/courses');
        setCourses(coursesRes.data.data.courses);
      } else if (activeTab === 'jobs') {
        const jobsRes = await api.get('/admin/jobs');
        setJobs(jobsRes.data.data.jobs);
      } else if (activeTab === 'users') {
        const usersRes = await api.get('/admin/users');
        setUsers(usersRes.data.data.users);
      } else if (activeTab === 'messages') {
        const contactsRes = await api.get('/admin/contacts');
        setContacts(contactsRes.data.data.contacts);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (type, id) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      try {
        await api.delete(`/admin/${type}/${id}`);
        toast.success(`${type} deleted successfully`);
        fetchDashboardData();
      } catch (error) {
        toast.error(`Failed to delete ${type}`);
      }
    }
  };

  const handleEdit = (type, item) => {
    setEditingItem(item);
    setModalType(type);
    setShowModal(true);
  };

  const handleAdd = (type) => {
    setEditingItem(null);
    setModalType(type);
    setShowModal(true);
  };

  const handleModalSuccess = () => {
    setShowModal(false);
    setEditingItem(null);
    fetchDashboardData();
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'messages', label: 'Messages', icon: Mail },
  ];

  if (isLoading && activeTab === 'overview') {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const renderModalContent = () => {
    if (modalType === 'course') {
      return (
        <CourseForm
          course={editingItem}
          onSuccess={handleModalSuccess}
          onCancel={() => setShowModal(false)}
        />
      );
    } else if (modalType === 'job') {
      return (
        <JobForm
          job={editingItem}
          onSuccess={handleModalSuccess}
          onCancel={() => setShowModal(false)}
        />
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage courses, jobs, users, and more</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg transition ${
                activeTab === tab.id
                  ? 'bg-white text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab - Same as before */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Courses</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalCourses || 0}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Jobs</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalJobs || 0}</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-full">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Users</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalUsers || 0}</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Enrollments</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalEnrollments || 0}</p>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <TrendingUp className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Job Applications</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalApplications || 0}</p>
                  </div>
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Unread Messages</p>
                    <p className="text-3xl font-bold text-red-600">{stats.unreadMessages || 0}</p>
                  </div>
                  <div className="p-3 bg-red-100 rounded-full">
                    <MessageCircle className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => handleAdd('course')}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Course
                </Button>
                <Button onClick={() => handleAdd('job')}>
                  <Plus className="h-4 w-4 mr-2" />
                  Post New Job
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Courses Tab - With Edit Button */}
        {activeTab === 'courses' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manage Courses</h2>
              <Button onClick={() => handleAdd('course')}>
                <Plus className="h-4 w-4 mr-2" />
                Add Course
              </Button>
            </div>
            
            <div className="space-y-4">
              {courses.map((course) => (
                <Card key={course._id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{course.title}</h3>
                      <p className="text-gray-600 text-sm">{course.category} • {course.level} • {course.price}</p>
                      <p className="text-gray-500 text-sm mt-1 line-clamp-1">{course.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEdit('course', course)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleDelete('courses', course._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Jobs Tab - With Edit Button */}
        {activeTab === 'jobs' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manage Jobs</h2>
              <Button onClick={() => handleAdd('job')}>
                <Plus className="h-4 w-4 mr-2" />
                Post Job
              </Button>
            </div>
            
            <div className="space-y-4">
              {jobs.map((job) => (
                <Card key={job._id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-gray-600 text-sm">{job.company} • {job.location} • {job.type}</p>
                      <p className="text-gray-500 text-sm mt-1 line-clamp-1">{job.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEdit('job', job)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleDelete('jobs', job._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Users Tab - Same as before */}
        {activeTab === 'users' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Manage Users</h2>
            <div className="space-y-4">
              {users.map((user) => (
                <Card key={user._id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-lg">{user.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          user.role === 'admin' 
                            ? 'bg-purple-100 text-purple-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {user.role}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{user.email}</p>
                      <p className="text-gray-500 text-sm">{user.phone || 'No phone'}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleDelete('users', user._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Messages Tab - Same as before */}
        {activeTab === 'messages' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Messages</h2>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <Card key={contact._id} className={`p-4 ${!contact.isRead ? 'border-l-4 border-l-primary-600' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{contact.name}</h3>
                        <span className="text-sm text-gray-500">{contact.email}</span>
                        {!contact.isRead && (
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <p className="font-medium text-gray-800">{contact.subject}</p>
                      <p className="text-gray-600 mt-1">{contact.message}</p>
                      <p className="text-gray-400 text-sm mt-2">
                        {new Date(contact.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <button 
                      onClick={() => handleDelete('contacts', contact._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Admin Modal */}
      <AdminModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalType === 'course' 
          ? `${editingItem ? 'Edit' : 'Add'} Course`
          : `${editingItem ? 'Edit' : 'Post'} Job`
        }
        size="lg"
      >
        {renderModalContent()}
      </AdminModal>
    </div>
  );
};