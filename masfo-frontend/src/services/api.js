// import axios from 'axios';

// const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// const api = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// // Add token to requests
// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('accessToken');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// // Handle token refresh
// api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response?.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;

//             const refreshToken = localStorage.getItem('refreshToken');
//             if (refreshToken) {
//                 try {
//                     // You'll need to add a refresh endpoint
//                     const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
//                         refreshToken
//                     });

//                     localStorage.setItem('accessToken', response.data.accessToken);
//                     originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
//                     return api(originalRequest);
//                 } catch (refreshError) {
//                     // Redirect to login
//                     localStorage.clear();
//                     window.location.href = '/login';
//                 }
//             }
//         }

//         return Promise.reject(error);
//     }
// );

// // Auth APIs
// export const authAPI = {
//     register: (data) => api.post('/auth/register', data),
//     login: (data) => api.post('/auth/login', data),
//     getMe: () => api.get('/auth/me'),
//     logout: () => api.post('/auth/logout'),
// };

// // Course APIs
// export const courseAPI = {
//     getAll: (params) => api.get('/courses', { params }),
//     getBySlug: (slug) => api.get(`/courses/${slug}`),
//     enroll: (courseId) => api.post(`/courses/${courseId}/enroll`),
//     getMyEnrollments: () => api.get('/courses/my-enrollments'),
//     updateProgress: (courseId, data) => api.put(`/courses/${courseId}/progress`, data),
// };

// // Job APIs
// export const jobAPI = {
//     getAll: (params) => api.get('/jobs', { params }),
//     getBySlug: (slug) => api.get(`/jobs/${slug}`),
//     saveJob: (jobId) => api.post(`/jobs/${jobId}/save`),
//     getSavedJobs: () => api.get('/jobs/saved'),
// };

// // Application APIs
// export const applicationAPI = {
//     submit: (jobId, formData) => api.post(`/applications/${jobId}/submit`, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//     }),
//     getMyApplications: () => api.get('/applications/my-applications'),
// };

// // Contact API
// export const contactAPI = {
//     submit: (data) => api.post('/contact/submit', data),
// };

// // User API
// export const userAPI = {
//     updateProfile: (data) => api.put('/users/profile', data),
//     uploadAvatar: (formData) => api.post('/users/avatar', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//     }),
// };

// export default api;

import axios from "axios";

// Get API URL from environment variables
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

// Create axios instance
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials: false,
// });

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - Add token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor - Handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            refreshToken,
          });

          localStorage.setItem("accessToken", response.data.accessToken);
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          localStorage.clear();
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      } else {
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

// ============ AUTH APIS ============
export const authAPI = {
  register: (userData) => api.post("/auth/register", userData),
  login: (credentials) => api.post("/auth/login", credentials),
  getMe: () => api.get("/auth/me"),
  logout: () => api.post("/auth/logout"),
};

// ============ COURSE APIS ============
export const courseAPI = {
  getAll: (params = {}) => api.get("/courses", { params }),
  getBySlug: (slug) => api.get(`/courses/${slug}`),
  enroll: (courseId) => api.post(`/courses/${courseId}/enroll`),
  getMyEnrollments: () => api.get("/courses/my-enrollments"),
  updateProgress: (courseId, data) =>
    api.put(`/courses/${courseId}/progress`, data),
};

// ============ JOB APIS ============
export const jobAPI = {
  getAll: (params = {}) => api.get("/jobs", { params }),
  getBySlug: (slug) => api.get(`/jobs/${slug}`),
  saveJob: (jobId) => api.post(`/jobs/${jobId}/save`),
  getSavedJobs: () => api.get("/jobs/saved"),
};

// ============ APPLICATION APIS ============
export const applicationAPI = {
  submit: (jobId, formData) =>
    api.post(`/applications/${jobId}/submit`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  getMyApplications: () => api.get("/applications/my-applications"),
};

// ============ CONTACT APIS ============
export const contactAPI = {
  submit: (data) => api.post("/contact/submit", data),
};

// ============ USER APIS ============
export const userAPI = {
  updateProfile: (data) => api.put("/users/profile", data),
  uploadAvatar: (formData) =>
    api.post("/users/avatar", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
};

export default api;
