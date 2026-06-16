// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import toast from 'react-hot-toast'
// import {
//     Search,
//     Filter,
//     Briefcase,
//     MapPin,
//     DollarSign,
//     Clock,
//     Building,
//     Users,
//     TrendingUp,
//     Shield,
//     Code,
//     Globe,
//     ChevronRight,
//     Bookmark,
//     BookmarkCheck
// } from 'lucide-react'
// import { Card } from '../components/common/Card'
// import { Button } from '../components/common/Button'

// const jobs = [
//     {
//         id: 1,
//         title: 'Senior Blockchain Developer',
//         slug: 'senior-blockchain-developer',
//         company: 'Web3 Nigeria',
//         companyLogo: 'https://via.placeholder.com/60x60?text=W3N',
//         location: 'Remote (Nigeria)',
//         type: 'Full-time',
//         salary: '₦500k - ₦800k',
//         salaryRange: { min: 500000, max: 800000, currency: 'NGN' },
//         experience: '3-5 years',
//         skills: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts'],
//         postedAt: '2 days ago',
//         deadline: '2024-05-30',
//         description: 'Looking for an experienced blockchain developer to build and deploy smart contracts for DeFi protocols.',
//         category: 'Development',
//         isFeatured: true,
//         applicants: 23
//     },
//     {
//         id: 2,
//         title: 'Smart Contract Auditor',
//         slug: 'smart-contract-auditor',
//         company: 'SecureChain',
//         companyLogo: 'https://via.placeholder.com/60x60?text=SC',
//         location: 'Remote',
//         type: 'Contract',
//         salary: '$5k - $8k per project',
//         salaryRange: { min: 5000, max: 8000, currency: 'USD' },
//         experience: '2-4 years',
//         skills: ['Security', 'Solidity', 'Auditing', 'Rust'],
//         postedAt: '5 days ago',
//         deadline: '2024-06-15',
//         description: 'Seeking a security expert to audit smart contracts and identify vulnerabilities.',
//         category: 'Security',
//         isFeatured: true,
//         applicants: 12
//     },
//     {
//         id: 3,
//         title: 'DeFi Protocol Analyst',
//         slug: 'defi-protocol-analyst',
//         company: 'DeFi Africa',
//         companyLogo: 'https://via.placeholder.com/60x60?text=DFA',
//         location: 'Lagos, Nigeria',
//         type: 'Full-time',
//         salary: '₦400k - ₦600k',
//         salaryRange: { min: 400000, max: 600000, currency: 'NGN' },
//         experience: '2-3 years',
//         skills: ['DeFi', 'Data Analysis', 'Smart Contracts', 'Economics'],
//         postedAt: '1 week ago',
//         deadline: '2024-06-10',
//         description: 'Analyze DeFi protocols, yields, and risks. Provide insights to investors.',
//         category: 'DeFi',
//         isFeatured: false,
//         applicants: 18
//     },
//     {
//         id: 4,
//         title: 'Web3 Frontend Developer',
//         slug: 'web3-frontend-developer',
//         company: 'dApp Solutions',
//         companyLogo: 'https://via.placeholder.com/60x60?text=dApp',
//         location: 'Remote',
//         type: 'Full-time',
//         salary: '₦350k - ₦550k',
//         salaryRange: { min: 350000, max: 550000, currency: 'NGN' },
//         experience: '2-4 years',
//         skills: ['React', 'Next.js', 'Ethers.js', 'Web3Modal', 'Tailwind'],
//         postedAt: '3 days ago',
//         deadline: '2024-06-20',
//         description: 'Build beautiful and responsive dApp interfaces with seamless wallet integration.',
//         category: 'Frontend',
//         isFeatured: true,
//         applicants: 34
//     },
//     {
//         id: 5,
//         title: 'Crypto Community Manager',
//         slug: 'crypto-community-manager',
//         company: 'CryptoHub NG',
//         companyLogo: 'https://via.placeholder.com/60x60?text=CH',
//         location: 'Abuja, Nigeria',
//         type: 'Full-time',
//         salary: '₦250k - ₦400k',
//         salaryRange: { min: 250000, max: 400000, currency: 'NGN' },
//         experience: '1-3 years',
//         skills: ['Discord', 'Telegram', 'Twitter', 'Community Building', 'Moderation'],
//         postedAt: '4 days ago',
//         deadline: '2024-05-25',
//         description: 'Manage and grow our crypto community across Discord, Telegram, and Twitter.',
//         category: 'Community',
//         isFeatured: false,
//         applicants: 45
//     },
//     {
//         id: 6,
//         title: 'Blockchain Security Researcher',
//         slug: 'blockchain-security-researcher',
//         company: 'ChainSecurity',
//         companyLogo: 'https://via.placeholder.com/60x60?text=CS',
//         location: 'Remote',
//         type: 'Full-time',
//         salary: '$60k - $90k',
//         salaryRange: { min: 60000, max: 90000, currency: 'USD' },
//         experience: '3-6 years',
//         skills: ['Security', 'Solidity', 'Rust', 'Penetration Testing', 'Cryptography'],
//         postedAt: '1 week ago',
//         deadline: '2024-06-30',
//         description: 'Research blockchain vulnerabilities and contribute to security tools.',
//         category: 'Security',
//         isFeatured: true,
//         applicants: 8
//     },
//     {
//         id: 7,
//         title: 'NFT Project Manager',
//         slug: 'nft-project-manager',
//         company: 'NFT Studios',
//         companyLogo: 'https://via.placeholder.com/60x60?text=NFT',
//         location: 'Remote',
//         type: 'Contract',
//         salary: '$3k - $5k per month',
//         salaryRange: { min: 3000, max: 5000, currency: 'USD' },
//         experience: '2-4 years',
//         skills: ['NFT', 'Project Management', 'Marketing', 'Community', 'Art Direction'],
//         postedAt: '6 days ago',
//         deadline: '2024-05-28',
//         description: 'Lead NFT projects from concept to launch. Coordinate artists, developers, and marketing.',
//         category: 'NFT',
//         isFeatured: false,
//         applicants: 27
//     },
//     {
//         id: 8,
//         title: 'Solidity Developer',
//         slug: 'solidity-developer',
//         company: 'DeFi Protocol',
//         companyLogo: 'https://via.placeholder.com/60x60?text=DP',
//         location: 'Remote',
//         type: 'Full-time',
//         salary: '$70k - $100k',
//         salaryRange: { min: 70000, max: 100000, currency: 'USD' },
//         experience: '2-5 years',
//         skills: ['Solidity', 'Hardhat', 'Foundry', 'OpenZeppelin', 'DeFi'],
//         postedAt: '2 weeks ago',
//         deadline: '2024-06-01',
//         description: 'Develop and optimize smart contracts for our DeFi lending protocol.',
//         category: 'Development',
//         isFeatured: false,
//         applicants: 19
//     },
//     {
//         id: 9,
//         title: 'Crypto Content Writer',
//         slug: 'crypto-content-writer',
//         company: 'Crypto Media',
//         companyLogo: 'https://via.placeholder.com/60x60?text=CM',
//         location: 'Remote',
//         type: 'Part-time',
//         salary: '₦150k - ₦250k',
//         salaryRange: { min: 150000, max: 250000, currency: 'NGN' },
//         experience: '1-2 years',
//         skills: ['Writing', 'Research', 'SEO', 'Crypto Knowledge', 'Blogging'],
//         postedAt: '3 days ago',
//         deadline: '2024-05-20',
//         description: 'Create engaging crypto content including articles, guides, and social media posts.',
//         category: 'Content',
//         isFeatured: false,
//         applicants: 52
//     }
// ]

// export const Jobs = () => {
//     const [searchTerm, setSearchTerm] = useState('')
//     const [selectedCategory, setSelectedCategory] = useState('all')
//     const [selectedType, setSelectedType] = useState('all')
//     const [selectedExperience, setSelectedExperience] = useState('all')
//     const [savedJobs, setSavedJobs] = useState([])

//     const categories = ['all', 'Development', 'Security', 'DeFi', 'Frontend', 'Community', 'NFT', 'Content']
//     const types = ['all', 'Full-time', 'Part-time', 'Contract', 'Freelance']
//     const experiences = ['all', 'Entry Level', '1-2 years', '2-4 years', '3-5 years', '5+ years']

//     const filteredJobs = jobs.filter(job => {
//         const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
//         const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory
//         const matchesType = selectedType === 'all' || job.type === selectedType
//         const matchesExperience = selectedExperience === 'all' || job.experience === selectedExperience

//         return matchesSearch && matchesCategory && matchesType && matchesExperience
//     })

//     const toggleSaveJob = (jobId) => {
//         if (savedJobs.includes(jobId)) {
//             setSavedJobs(savedJobs.filter(id => id !== jobId))
//             toast.success('Job removed from saved')
//         } else {
//             setSavedJobs([...savedJobs, jobId])
//             toast.success('Job saved for later')
//         }
//     }

//     const getCategoryColor = (category) => {
//         switch (category) {
//             case 'Development': return 'bg-blue-100 text-blue-700'
//             case 'Security': return 'bg-red-100 text-red-700'
//             case 'DeFi': return 'bg-green-100 text-green-700'
//             case 'Frontend': return 'bg-purple-100 text-purple-700'
//             case 'Community': return 'bg-yellow-100 text-yellow-700'
//             case 'NFT': return 'bg-pink-100 text-pink-700'
//             case 'Content': return 'bg-orange-100 text-orange-700'
//             default: return 'bg-gray-100 text-gray-700'
//         }
//     }

//     const getTypeColor = (type) => {
//         switch (type) {
//             case 'Full-time': return 'bg-green-100 text-green-700'
//             case 'Part-time': return 'bg-blue-100 text-blue-700'
//             case 'Contract': return 'bg-orange-100 text-orange-700'
//             case 'Freelance': return 'bg-purple-100 text-purple-700'
//             default: return 'bg-gray-100 text-gray-700'
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 pt-20">
//             <div className="container-custom py-8">
//                 {/* Header */}
//                 <div className="text-center max-w-3xl mx-auto mb-12">
//                     <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                         Web3 <span className="gradient-text">Jobs</span>
//                     </h1>
//                     <p className="text-xl text-gray-600">
//                         Find your dream job in blockchain, DeFi, NFTs, and Web3 development
//                     </p>
//                 </div>

//                 {/* Search and Filters */}
//                 <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//                     {/* Search Bar */}
//                     <div className="relative mb-6">
//                         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                         <input
//                             type="text"
//                             placeholder="Search jobs by title, company, or skill..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                         />
//                     </div>

//                     {/* Filter Row */}
//                     <div className="grid md:grid-cols-3 gap-4">
//                         <select
//                             value={selectedCategory}
//                             onChange={(e) => setSelectedCategory(e.target.value)}
//                             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                         >
//                             {categories.map(cat => (
//                                 <option key={cat} value={cat}>
//                                     {cat === 'all' ? 'All Categories' : cat}
//                                 </option>
//                             ))}
//                         </select>

//                         <select
//                             value={selectedType}
//                             onChange={(e) => setSelectedType(e.target.value)}
//                             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                         >
//                             {types.map(type => (
//                                 <option key={type} value={type}>
//                                     {type === 'all' ? 'All Job Types' : type}
//                                 </option>
//                             ))}
//                         </select>

//                         <select
//                             value={selectedExperience}
//                             onChange={(e) => setSelectedExperience(e.target.value)}
//                             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                         >
//                             {experiences.map(exp => (
//                                 <option key={exp} value={exp}>
//                                     {exp === 'all' ? 'All Experience Levels' : exp}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>

//                 {/* Results Count */}
//                 <div className="flex justify-between items-center mb-6">
//                     <p className="text-gray-600">
//                         Found <span className="font-semibold">{filteredJobs.length}</span> jobs
//                     </p>
//                     <div className="flex items-center space-x-2">
//                         <span className="text-sm text-gray-500">Sort by:</span>
//                         <select className="text-sm border rounded-lg px-3 py-1">
//                             <option>Most Recent</option>
//                             <option>Salary (High to Low)</option>
//                             <option>Salary (Low to High)</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Featured Jobs Banner */}
//                 {filteredJobs.some(job => job.isFeatured) && (
//                     <div className="mb-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6">
//                         <div className="flex items-center space-x-2 mb-3">
//                             <TrendingUp className="h-5 w-5 text-primary-600" />
//                             <span className="font-semibold text-primary-600">Featured Jobs</span>
//                         </div>
//                         <div className="grid md:grid-cols-2 gap-4">
//                             {filteredJobs.filter(job => job.isFeatured).slice(0, 2).map(job => (
//                                 <Link key={job.id} to={`/jobs/${job.slug}`}>
//                                     <Card className="p-4 hover:shadow-lg transition">
//                                         <div className="flex items-center space-x-3">
//                                             <img src={job.companyLogo} alt={job.company} className="w-12 h-12 rounded-lg" />
//                                             <div>
//                                                 <h3 className="font-semibold">{job.title}</h3>
//                                                 <p className="text-sm text-gray-600">{job.company}</p>
//                                             </div>
//                                         </div>
//                                     </Card>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {/* Jobs Grid */}
//                 <div className="space-y-4">
//                     {filteredJobs.map((job) => (
//                         <Card key={job.id} className="p-6 hover:shadow-lg transition">
//                             <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
//                                 {/* Left - Company Info */}
//                                 <div className="flex items-start space-x-4 flex-1">
//                                     <img
//                                         src={job.companyLogo}
//                                         alt={job.company}
//                                         className="w-16 h-16 rounded-lg object-cover"
//                                     />
//                                     <div className="flex-1">
//                                         <div className="flex flex-wrap items-center gap-2 mb-2">
//                                             <h2 className="text-xl font-bold text-gray-900">
//                                                 <Link to={`/jobs/${job.slug}`} className="hover:text-primary-600 transition">
//                                                     {job.title}
//                                                 </Link>
//                                             </h2>
//                                             {job.isFeatured && (
//                                                 <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
//                                                     Featured
//                                                 </span>
//                                             )}
//                                         </div>

//                                         <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
//                                             <div className="flex items-center space-x-1">
//                                                 <Building className="h-4 w-4" />
//                                                 <span>{job.company}</span>
//                                             </div>
//                                             <div className="flex items-center space-x-1">
//                                                 <MapPin className="h-4 w-4" />
//                                                 <span>{job.location}</span>
//                                             </div>
//                                             <div className="flex items-center space-x-1">
//                                                 <DollarSign className="h-4 w-4" />
//                                                 <span>{job.salary}</span>
//                                             </div>
//                                             <div className="flex items-center space-x-1">
//                                                 <Clock className="h-4 w-4" />
//                                                 <span>{job.postedAt}</span>
//                                             </div>
//                                         </div>

//                                         <div className="flex flex-wrap gap-2 mb-3">
//                                             <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(job.category)}`}>
//                                                 {job.category}
//                                             </span>
//                                             <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(job.type)}`}>
//                                                 {job.type}
//                                             </span>
//                                             {job.skills.slice(0, 3).map((skill, index) => (
//                                                 <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
//                                                     {skill}
//                                                 </span>
//                                             ))}
//                                             {job.skills.length > 3 && (
//                                                 <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
//                                                     +{job.skills.length - 3} more
//                                                 </span>
//                                             )}
//                                         </div>

//                                         <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
//                                     </div>
//                                 </div>

//                                 {/* Right - Actions */}
//                                 <div className="flex flex-row md:flex-col items-center gap-3">
//                                     <Link to={`/jobs/${job.slug}`}>
//                                         <Button size="sm">
//                                             View Details
//                                             <ChevronRight className="ml-1 h-4 w-4" />
//                                         </Button>
//                                     </Link>
//                                     <button
//                                         onClick={() => toggleSaveJob(job.id)}
//                                         className="text-gray-400 hover:text-primary-600 transition"
//                                     >
//                                         {savedJobs.includes(job.id) ? (
//                                             <BookmarkCheck className="h-5 w-5 text-primary-600" />
//                                         ) : (
//                                             <Bookmark className="h-5 w-5" />
//                                         )}
//                                     </button>
//                                 </div>
//                             </div>
//                         </Card>
//                     ))}
//                 </div>

//                 {filteredJobs.length === 0 && (
//                     <div className="text-center py-12">
//                         <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
//                         <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
//                         <p className="text-gray-600">Try adjusting your search or filters</p>
//                         <button
//                             onClick={() => {
//                                 setSearchTerm('')
//                                 setSelectedCategory('all')
//                                 setSelectedType('all')
//                                 setSelectedExperience('all')
//                             }}
//                             className="mt-4 text-primary-600 hover:text-primary-700"
//                         >
//                             Clear all filters
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Briefcase, MapPin, DollarSign, Clock, Building, Users, TrendingUp, ChevronRight, Bookmark, BookmarkCheck } from 'lucide-react'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { jobAPI } from '../services/api'
import toast from 'react-hot-toast'

export const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedExperience, setSelectedExperience] = useState('all')
  const [jobs, setJobs] = useState([])
  const [savedJobs, setSavedJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const categories = ['all', 'Development', 'Security', 'DeFi', 'Frontend', 'Community', 'NFT', 'Content']
  const types = ['all', 'Full-time', 'Part-time', 'Contract', 'Freelance']
  const experiences = ['all', 'Entry Level', '1-2 years', '2-4 years', '3-5 years', '5+ years']

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true)
      try {
        const params = {}
        if (selectedCategory !== 'all') params.category = selectedCategory
        if (selectedType !== 'all') params.type = selectedType
        if (selectedExperience !== 'all') params.experience = selectedExperience
        if (searchTerm) params.search = searchTerm
        
        const response = await jobAPI.getAll(params)
        setJobs(response.data.data.jobs || [])
      } catch (error) {
        console.error('Error fetching jobs:', error)
        toast.error('Failed to load jobs')
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchJobs()
  }, [selectedCategory, selectedType, selectedExperience, searchTerm])

  useEffect(() => {
    const loadSavedJobs = async () => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        try {
          const response = await jobAPI.getSavedJobs()
          setSavedJobs(response.data.data.savedJobs?.map(job => job._id) || [])
        } catch (error) {
          console.error('Error loading saved jobs:', error)
        }
      }
    }
    loadSavedJobs()
  }, [])

  const toggleSaveJob = async (jobId) => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      toast.error('Please login to save jobs')
      return
    }
    
    try {
      const response = await jobAPI.saveJob(jobId)
      if (response.data.saved) {
        setSavedJobs([...savedJobs, jobId])
        toast.success('Job saved for later')
      } else {
        setSavedJobs(savedJobs.filter(id => id !== jobId))
        toast.success('Job removed from saved')
      }
    } catch (error) {
      console.error('Error saving job:', error)
      toast.error('Failed to save job')
    }
  }

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Development': return 'bg-blue-100 text-blue-700'
      case 'Security': return 'bg-red-100 text-red-700'
      case 'DeFi': return 'bg-green-100 text-green-700'
      case 'Frontend': return 'bg-purple-100 text-purple-700'
      case 'Community': return 'bg-yellow-100 text-yellow-700'
      case 'NFT': return 'bg-pink-100 text-pink-700'
      case 'Content': return 'bg-orange-100 text-orange-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getTypeColor = (type) => {
    switch(type) {
      case 'Full-time': return 'bg-green-100 text-green-700'
      case 'Part-time': return 'bg-blue-100 text-blue-700'
      case 'Contract': return 'bg-orange-100 text-orange-700'
      case 'Freelance': return 'bg-purple-100 text-purple-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading jobs...</p>
        </div>
      </div>
    )
  }

  const featuredJobs = jobs.filter(job => job.isFeatured)

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Web3 <span className="gradient-text">Jobs</span>
          </h1>
          <p className="text-xl text-gray-600">
            Find your dream job in blockchain, DeFi, NFTs, and Web3 development
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs by title, company, or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Job Types' : type}
                </option>
              ))}
            </select>

            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {experiences.map(exp => (
                <option key={exp} value={exp}>
                  {exp === 'all' ? 'All Experience Levels' : exp}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold">{jobs.length}</span> jobs
          </p>
        </div>

        {featuredJobs.length > 0 && (
          <div className="mb-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-3">
              <TrendingUp className="h-5 w-5 text-primary-600" />
              <span className="font-semibold text-primary-600">Featured Jobs</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {featuredJobs.slice(0, 2).map(job => (
                <Link key={job._id} to={`/jobs/${job.slug}`}>
                  <Card className="p-4 hover:shadow-lg transition">
                    <div className="flex items-center space-x-3">
                      <img src={job.companyLogo || 'https://via.placeholder.com/60x60?text=Company'} alt={job.company} className="w-12 h-12 rounded-lg" />
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-gray-600">{job.company}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job._id} className="p-6 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start space-x-4 flex-1">
                  <img 
                    src={job.companyLogo || 'https://via.placeholder.com/60x60?text=Company'} 
                    alt={job.company}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-xl font-bold text-gray-900">
                        <Link to={`/jobs/${job.slug}`} className="hover:text-primary-600 transition">
                          {job.title}
                        </Link>
                      </h2>
                      {job.isFeatured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.postedAt ? new Date(job.postedAt).toLocaleDateString() : 'Recently'}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(job.category)}`}>
                        {job.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                      {job.skills?.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                      {job.skills?.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{job.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center gap-3">
                  <Link to={`/jobs/${job.slug}`}>
                    <Button size="sm">
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                  <button
                    onClick={() => toggleSaveJob(job._id)}
                    className="text-gray-400 hover:text-primary-600 transition"
                  >
                    {savedJobs.includes(job._id) ? (
                      <BookmarkCheck className="h-5 w-5 text-primary-600" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {jobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedType('all')
                setSelectedExperience('all')
              }}
              className="mt-4 text-primary-600 hover:text-primary-700"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}