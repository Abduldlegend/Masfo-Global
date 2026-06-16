// import { useState, useEffect } from 'react'
// import { useParams, Link, useNavigate } from 'react-router-dom'
// import {
//     Briefcase,
//     MapPin,
//     DollarSign,
//     Clock,
//     Building,
//     Calendar,
//     Users,
//     CheckCircle,
//     ArrowLeft,
//     Bookmark,
//     BookmarkCheck,
//     Share2,
//     Mail,
//     Phone,
//     Globe,
//     Award,
//     TrendingUp,
//     Shield,
//     Code,
//     Send
// } from 'lucide-react'
// import { Card } from '../components/common/Card'
// import { Button } from '../components/common/Button'
// import toast from 'react-hot-toast'

// // Complete job data (same as in Jobs.jsx)
// const jobsData = {
//     'senior-blockchain-developer': {
//         id: 1,
//         title: 'Senior Blockchain Developer',
//         slug: 'senior-blockchain-developer',
//         company: 'Web3 Nigeria',
//         companyLogo: 'https://via.placeholder.com/100x100?text=W3N',
//         companyDescription: 'Web3 Nigeria is a leading blockchain development company focused on building decentralized applications for the African market.',
//         location: 'Remote (Nigeria)',
//         type: 'Full-time',
//         salary: '₦500k - ₦800k',
//         experience: '3-5 years',
//         skills: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts', 'Hardhat', 'OpenZeppelin'],
//         postedAt: '2 days ago',
//         deadline: '2024-05-30',
//         description: 'Looking for an experienced blockchain developer to build and deploy smart contracts for DeFi protocols.',
//         responsibilities: [
//             'Design, develop, and deploy smart contracts on Ethereum and EVM-compatible chains',
//             'Integrate blockchain solutions with existing systems',
//             'Write comprehensive tests and documentation',
//             'Collaborate with frontend developers to integrate Web3 functionality',
//             'Stay updated with the latest blockchain technologies and security practices',
//             'Mentor junior developers and conduct code reviews'
//         ],
//         requirements: [
//             '3+ years of experience in blockchain development',
//             'Strong proficiency in Solidity and smart contract development',
//             'Experience with Hardhat, Truffle, or Foundry',
//             'Understanding of DeFi protocols and standards (ERC20, ERC721, ERC1155)',
//             'Knowledge of security best practices and common vulnerabilities',
//             'Bachelor\'s degree in Computer Science or related field (preferred)'
//         ],
//         benefits: [
//             'Competitive salary and performance bonuses',
//             'Remote work flexibility',
//             'Health insurance',
//             'Learning and development budget',
//             'Conference and workshop attendance',
//             'Company laptop and equipment'
//         ],
//         category: 'Development',
//         applicants: 23
//     },
//     'smart-contract-auditor': {
//         id: 2,
//         title: 'Smart Contract Auditor',
//         slug: 'smart-contract-auditor',
//         company: 'SecureChain',
//         companyLogo: 'https://via.placeholder.com/100x100?text=SC',
//         companyDescription: 'SecureChain is a leading blockchain security firm providing auditing services to top DeFi protocols.',
//         location: 'Remote',
//         type: 'Contract',
//         salary: '$5k - $8k per project',
//         experience: '2-4 years',
//         skills: ['Security', 'Solidity', 'Auditing', 'Rust', 'Formal Verification'],
//         postedAt: '5 days ago',
//         deadline: '2024-06-15',
//         description: 'Seeking a security expert to audit smart contracts and identify vulnerabilities.',
//         responsibilities: [
//             'Conduct comprehensive security audits of smart contracts',
//             'Identify vulnerabilities and provide remediation recommendations',
//             'Write detailed audit reports',
//             'Collaborate with development teams to fix security issues',
//             'Research new attack vectors and security tools'
//         ],
//         requirements: [
//             '2+ years of experience in smart contract auditing',
//             'Deep understanding of Solidity and common vulnerabilities',
//             'Experience with security tools (Slither, Mythril, Echidna)',
//             'Strong analytical and problem-solving skills',
//             'Excellent written communication for report writing'
//         ],
//         benefits: [
//             'Competitive project-based compensation',
//             'Flexible working hours',
//             'Work with top DeFi protocols',
//             'Professional development opportunities'
//         ],
//         category: 'Security',
//         applicants: 12
//     },
//     'defi-protocol-analyst': {
//         id: 3,
//         title: 'DeFi Protocol Analyst',
//         slug: 'defi-protocol-analyst',
//         company: 'DeFi Africa',
//         companyLogo: 'https://via.placeholder.com/100x100?text=DFA',
//         companyDescription: 'DeFi Africa is an investment firm focused on decentralized finance opportunities in emerging markets.',
//         location: 'Lagos, Nigeria',
//         type: 'Full-time',
//         salary: '₦400k - ₦600k',
//         experience: '2-3 years',
//         skills: ['DeFi', 'Data Analysis', 'Smart Contracts', 'Economics', 'Risk Assessment'],
//         postedAt: '1 week ago',
//         deadline: '2024-06-10',
//         description: 'Analyze DeFi protocols, yields, and risks. Provide insights to investors.',
//         responsibilities: [
//             'Research and analyze DeFi protocols across multiple chains',
//             'Monitor yield opportunities and risk metrics',
//             'Prepare investment reports and recommendations',
//             'Track protocol developments and upgrades',
//             'Assess smart contract risks and economic models'
//         ],
//         requirements: [
//             '2+ years of experience in DeFi or crypto analysis',
//             'Strong understanding of DeFi protocols (Uniswap, Aave, Curve, etc.)',
//             'Experience with data analysis tools (Dune Analytics, Nansen)',
//             'Knowledge of risk assessment methodologies',
//             'Excellent research and communication skills'
//         ],
//         benefits: [
//             'Competitive salary with performance bonus',
//             'Hybrid work model',
//             'Learning budget for courses and certifications',
//             'Access to premium analytics tools'
//         ],
//         category: 'DeFi',
//         applicants: 18
//     },
//     'web3-frontend-developer': {
//         id: 4,
//         title: 'Web3 Frontend Developer',
//         slug: 'web3-frontend-developer',
//         company: 'dApp Solutions',
//         companyLogo: 'https://via.placeholder.com/100x100?text=dApp',
//         companyDescription: 'dApp Solutions builds user-friendly decentralized applications for blockchain projects.',
//         location: 'Remote',
//         type: 'Full-time',
//         salary: '₦350k - ₦550k',
//         experience: '2-4 years',
//         skills: ['React', 'Next.js', 'Ethers.js', 'Web3Modal', 'Tailwind', 'GraphQL'],
//         postedAt: '3 days ago',
//         deadline: '2024-06-20',
//         description: 'Build beautiful and responsive dApp interfaces with seamless wallet integration.',
//         responsibilities: [
//             'Develop responsive and performant dApp interfaces',
//             'Integrate wallet connections (MetaMask, WalletConnect)',
//             'Interact with smart contracts using Ethers.js',
//             'Optimize application performance and user experience',
//             'Collaborate with backend and blockchain developers'
//         ],
//         requirements: [
//             '2+ years of frontend development experience',
//             'Strong proficiency in React and modern JavaScript',
//             'Experience with Web3 libraries (Ethers.js, Web3.js)',
//             'Understanding of wallet integration and transaction handling',
//             'Knowledge of CSS frameworks (Tailwind, Material-UI)'
//         ],
//         benefits: [
//             'Competitive salary',
//             '100% remote work',
//             'Flexible hours',
//             'Equipment allowance',
//             'Health insurance'
//         ],
//         category: 'Frontend',
//         applicants: 34
//     },
//     'crypto-community-manager': {
//         id: 5,
//         title: 'Crypto Community Manager',
//         slug: 'crypto-community-manager',
//         company: 'CryptoHub NG',
//         companyLogo: 'https://via.placeholder.com/100x100?text=CH',
//         companyDescription: 'CryptoHub NG is Nigeria\'s largest crypto community platform for education and networking.',
//         location: 'Abuja, Nigeria',
//         type: 'Full-time',
//         salary: '₦250k - ₦400k',
//         experience: '1-3 years',
//         skills: ['Discord', 'Telegram', 'Twitter', 'Community Building', 'Moderation', 'Content Creation'],
//         postedAt: '4 days ago',
//         deadline: '2024-05-25',
//         description: 'Manage and grow our crypto community across Discord, Telegram, and Twitter.',
//         responsibilities: [
//             'Manage daily community operations across Discord and Telegram',
//             'Create engaging content and facilitate discussions',
//             'Organize AMAs, events, and community calls',
//             'Moderate conversations and handle conflict resolution',
//             'Gather feedback and report community sentiment'
//         ],
//         requirements: [
//             '1+ years of community management experience',
//             'Active participation in crypto communities',
//             'Excellent written and verbal communication',
//             'Experience with Discord and Telegram bots',
//             'Crisis management and conflict resolution skills'
//         ],
//         benefits: [
//             'Competitive salary',
//             'Performance bonuses',
//             'Remote work options',
//             'Learning opportunities',
//             'Networking with industry leaders'
//         ],
//         category: 'Community',
//         applicants: 45
//     },
//     'blockchain-security-researcher': {
//         id: 6,
//         title: 'Blockchain Security Researcher',
//         slug: 'blockchain-security-researcher',
//         company: 'ChainSecurity',
//         companyLogo: 'https://via.placeholder.com/100x100?text=CS',
//         companyDescription: 'ChainSecurity is a blockchain security research lab discovering vulnerabilities in Web3 protocols.',
//         location: 'Remote',
//         type: 'Full-time',
//         salary: '$60k - $90k',
//         experience: '3-6 years',
//         skills: ['Security', 'Solidity', 'Rust', 'Penetration Testing', 'Cryptography', 'Formal Verification'],
//         postedAt: '1 week ago',
//         deadline: '2024-06-30',
//         description: 'Research blockchain vulnerabilities and contribute to security tools.',
//         responsibilities: [
//             'Conduct research on blockchain security vulnerabilities',
//             'Develop tools for automated vulnerability detection',
//             'Publish research findings and security advisories',
//             'Collaborate with the broader security community',
//             'Participate in bug bounty programs'
//         ],
//         requirements: [
//             '3+ years of security research experience',
//             'Deep understanding of blockchain architecture and cryptography',
//             'Experience with reverse engineering and fuzzing',
//             'Published research or CVEs (preferred)',
//             'Programming skills in Solidity, Rust, or Go'
//         ],
//         benefits: [
//             'Competitive salary',
//             'Research budget',
//             'Conference speaking opportunities',
//             'Flexible work environment',
//             'Professional development funding'
//         ],
//         category: 'Security',
//         applicants: 8
//     }
// }

// export const JobDetail = () => {
//     const { slug } = useParams()
//     const navigate = useNavigate()
//     const [isApplying, setIsApplying] = useState(false)
//     const [isSaved, setIsSaved] = useState(false)
//     const [showApplyForm, setShowApplyForm] = useState(false)

//     const job = jobsData[slug]

//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [slug])

//     const handleApply = () => {
//         const token = localStorage.getItem('token')

//         if (!token) {
//             localStorage.setItem('redirectAfterLogin', `/jobs/${slug}`)
//             toast.error('Please login or sign up to apply for this job', {
//                 duration: 3000,
//                 position: 'top-center',
//             })
//             navigate('/login')
//         } else {
//             setShowApplyForm(true)
//         }
//     }

//     const submitApplication = () => {
//         setIsApplying(true)
//         setTimeout(() => {
//             toast.success('Application submitted successfully! 🎉', {
//                 duration: 3000,
//                 position: 'top-center',
//             })
//             setIsApplying(false)
//             setShowApplyForm(false)
//             navigate('/dashboard')
//         }, 1500)
//     }

//     const toggleSave = () => {
//         setIsSaved(!isSaved)
//         toast.success(isSaved ? 'Job removed from saved' : 'Job saved for later')
//     }

//     if (!job) {
//         return (
//             <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
//                 <div className="text-center">
//                     <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
//                     <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
//                     <p className="text-gray-600 mb-6">The job posting you're looking for doesn't exist or has been filled.</p>
//                     <Link to="/jobs">
//                         <Button>Browse All Jobs</Button>
//                     </Link>
//                 </div>
//             </div>
//         )
//     }

//     const getCategoryColor = (category) => {
//         switch (category) {
//             case 'Development': return 'bg-blue-100 text-blue-700'
//             case 'Security': return 'bg-red-100 text-red-700'
//             case 'DeFi': return 'bg-green-100 text-green-700'
//             case 'Frontend': return 'bg-purple-100 text-purple-700'
//             case 'Community': return 'bg-yellow-100 text-yellow-700'
//             default: return 'bg-gray-100 text-gray-700'
//         }
//     }

//     const getTypeColor = (type) => {
//         switch (type) {
//             case 'Full-time': return 'bg-green-100 text-green-700'
//             case 'Part-time': return 'bg-blue-100 text-blue-700'
//             case 'Contract': return 'bg-orange-100 text-orange-700'
//             default: return 'bg-gray-100 text-gray-700'
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 pt-20">
//             <div className="container-custom py-8">
//                 {/* Back Button */}
//                 <Link to="/jobs" className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6 transition">
//                     <ArrowLeft className="h-4 w-4 mr-2" />
//                     Back to Jobs
//                 </Link>

//                 <div className="grid lg:grid-cols-3 gap-8">
//                     {/* Main Content */}
//                     <div className="lg:col-span-2 space-y-6">
//                         {/* Job Header */}
//                         <Card className="p-6">
//                             <div className="flex items-start justify-between">
//                                 <div className="flex items-start space-x-4">
//                                     <img
//                                         src={job.companyLogo}
//                                         alt={job.company}
//                                         className="w-20 h-20 rounded-lg object-cover"
//                                     />
//                                     <div>
//                                         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
//                                         <div className="flex flex-wrap gap-3 mb-3">
//                                             <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(job.category)}`}>
//                                                 {job.category}
//                                             </span>
//                                             <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(job.type)}`}>
//                                                 {job.type}
//                                             </span>
//                                             <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
//                                                 {job.experience}
//                                             </span>
//                                         </div>
//                                         <div className="space-y-1">
//                                             <div className="flex items-center space-x-2 text-gray-600">
//                                                 <Building className="h-4 w-4" />
//                                                 <span>{job.company}</span>
//                                             </div>
//                                             <div className="flex items-center space-x-2 text-gray-600">
//                                                 <MapPin className="h-4 w-4" />
//                                                 <span>{job.location}</span>
//                                             </div>
//                                             <div className="flex items-center space-x-2 text-gray-600">
//                                                 <DollarSign className="h-4 w-4" />
//                                                 <span>{job.salary}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button onClick={toggleSave} className="text-gray-400 hover:text-primary-600 transition">
//                                     {isSaved ? <BookmarkCheck className="h-6 w-6 text-primary-600" /> : <Bookmark className="h-6 w-6" />}
//                                 </button>
//                             </div>
//                         </Card>

//                         {/* Company Description */}
//                         <Card className="p-6">
//                             <h2 className="text-xl font-bold mb-4">About the Company</h2>
//                             <p className="text-gray-700 leading-relaxed">{job.companyDescription}</p>
//                         </Card>

//                         {/* Job Description */}
//                         <Card className="p-6">
//                             <h2 className="text-xl font-bold mb-4">Job Description</h2>
//                             <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

//                             <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
//                             <ul className="space-y-2 mb-6">
//                                 {job.responsibilities.map((resp, index) => (
//                                     <li key={index} className="flex items-start space-x-2">
//                                         <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
//                                         <span className="text-gray-700">{resp}</span>
//                                     </li>
//                                 ))}
//                             </ul>

//                             <h3 className="text-lg font-semibold mb-3">Requirements</h3>
//                             <ul className="space-y-2 mb-6">
//                                 {job.requirements.map((req, index) => (
//                                     <li key={index} className="flex items-start space-x-2">
//                                         <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
//                                         <span className="text-gray-700">{req}</span>
//                                     </li>
//                                 ))}
//                             </ul>

//                             <h3 className="text-lg font-semibold mb-3">Skills Required</h3>
//                             <div className="flex flex-wrap gap-2 mb-6">
//                                 {job.skills.map((skill, index) => (
//                                     <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
//                                         {skill}
//                                     </span>
//                                 ))}
//                             </div>

//                             <h3 className="text-lg font-semibold mb-3">Benefits</h3>
//                             <ul className="space-y-2">
//                                 {job.benefits.map((benefit, index) => (
//                                     <li key={index} className="flex items-start space-x-2">
//                                         <Award className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
//                                         <span className="text-gray-700">{benefit}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </Card>
//                     </div>

//                     {/* Sidebar */}
//                     <div className="space-y-6">
//                         {/* Apply Card */}
//                         <Card className="p-6 sticky top-24">
//                             {!showApplyForm ? (
//                                 <>
//                                     <div className="text-center mb-6">
//                                         <div className="text-2xl font-bold text-primary-600 mb-2">{job.salary}</div>
//                                         <p className="text-gray-600 text-sm">{job.type} • {job.location}</p>
//                                     </div>

//                                     <Button onClick={handleApply} size="lg" fullWidth className="mb-3">
//                                         Apply Now
//                                     </Button>

//                                     <p className="text-xs text-gray-500 text-center">
//                                         Posted {job.postedAt} • {job.applicants} applicants
//                                     </p>

//                                     <div className="mt-6 pt-6 border-t">
//                                         <h3 className="font-semibold mb-3">Job Overview</h3>
//                                         <div className="space-y-2 text-sm">
//                                             <div className="flex justify-between">
//                                                 <span className="text-gray-600">Experience Level:</span>
//                                                 <span className="font-medium">{job.experience}</span>
//                                             </div>
//                                             <div className="flex justify-between">
//                                                 <span className="text-gray-600">Application Deadline:</span>
//                                                 <span className="font-medium">{job.deadline}</span>
//                                             </div>
//                                             <div className="flex justify-between">
//                                                 <span className="text-gray-600">Total Applicants:</span>
//                                                 <span className="font-medium">{job.applicants}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </>
//                             ) : (
//                                 <div>
//                                     <h3 className="text-xl font-bold mb-4">Submit Application</h3>
//                                     <div className="space-y-4">
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                                 Full Name *
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                                                 placeholder="Enter your full name"
//                                             />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                                 Email Address *
//                                             </label>
//                                             <input
//                                                 type="email"
//                                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                                                 placeholder="you@example.com"
//                                             />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                                 Cover Letter *
//                                             </label>
//                                             <textarea
//                                                 rows="4"
//                                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
//                                                 placeholder="Tell us why you're a great fit for this position..."
//                                             />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                                 Resume/CV *
//                                             </label>
//                                             <input
//                                                 type="file"
//                                                 accept=".pdf,.doc,.docx"
//                                                 className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
//                                             />
//                                         </div>
//                                         <div className="flex space-x-3">
//                                             <Button onClick={submitApplication} disabled={isApplying} className="flex-1">
//                                                 {isApplying ? 'Submitting...' : 'Submit Application'}
//                                                 <Send className="ml-2 h-4 w-4" />
//                                             </Button>
//                                             <Button variant="outline" onClick={() => setShowApplyForm(false)}>
//                                                 Cancel
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </Card>

//                         {/* Share Card */}
//                         <Card className="p-6">
//                             <h3 className="font-semibold mb-3">Share This Job</h3>
//                             <div className="flex space-x-3">
//                                 <button className="flex-1 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition">
//                                     Twitter
//                                 </button>
//                                 <button className="flex-1 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006699] transition">
//                                     LinkedIn
//                                 </button>
//                                 <button className="flex-1 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd59] transition">
//                                     WhatsApp
//                                 </button>
//                             </div>
//                         </Card>

//                         {/* Skills Match */}
//                         <Card className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50">
//                             <h3 className="font-semibold mb-3">Your Skills Match</h3>
//                             <div className="text-center">
//                                 <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
//                                 <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//                                     <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
//                                 </div>
//                                 <p className="text-sm text-gray-600">You match {job.skills.slice(0, 3).length} of {job.skills.length} key skills</p>
//                                 <Button variant="outline" size="sm" className="mt-3" onClick={handleApply}>
//                                     Complete Your Profile
//                                 </Button>
//                             </div>
//                         </Card>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Briefcase, MapPin, DollarSign, Clock, Building, Users, CheckCircle, ArrowLeft, Bookmark, BookmarkCheck, Award, Send } from 'lucide-react'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { jobAPI, applicationAPI } from '../services/api'
import toast from 'react-hot-toast'

export const JobDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [job, setJob] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isApplying, setIsApplying] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [showApplyForm, setShowApplyForm] = useState(false)
  const [coverLetter, setCoverLetter] = useState('')
  const [resumeFile, setResumeFile] = useState(null)

  useEffect(() => {
    const fetchJob = async () => {
      setIsLoading(true)
      try {
        const response = await jobAPI.getBySlug(slug)
        setJob(response.data.data.job)
        window.scrollTo(0, 0)
        
        const token = localStorage.getItem('accessToken')
        if (token) {
          const savedResponse = await jobAPI.getSavedJobs()
          const isJobSaved = savedResponse.data.data.savedJobs?.some(j => j._id === response.data.data.job._id)
          setIsSaved(isJobSaved)
        }
      } catch (error) {
        console.error('Error fetching job:', error)
        if (error.response?.status === 404) {
          toast.error('Job not found')
        } else {
          toast.error('Failed to load job')
        }
      } finally {
        setIsLoading(false)
      }
    }
    
    if (slug) {
      fetchJob()
    }
  }, [slug])

  const handleApply = () => {
    const token = localStorage.getItem('accessToken')
    
    if (!token) {
      localStorage.setItem('redirectAfterLogin', `/jobs/${slug}`)
      toast.error('Please login or sign up to apply for this job')
      navigate('/login')
    } else {
      setShowApplyForm(true)
    }
  }

  const submitApplication = async () => {
    if (!coverLetter.trim()) {
      toast.error('Please provide a cover letter')
      return
    }
    
    if (!resumeFile) {
      toast.error('Please upload your resume')
      return
    }
    
    setIsApplying(true)
    try {
      const formData = new FormData()
      formData.append('coverLetter', coverLetter)
      formData.append('resume', resumeFile)
      
      await applicationAPI.submit(job._id, formData)
      toast.success('Application submitted successfully! 🎉')
      setShowApplyForm(false)
      navigate('/dashboard')
    } catch (error) {
      console.error('Application error:', error)
      toast.error(error.response?.data?.message || 'Failed to submit application')
    } finally {
      setIsApplying(false)
    }
  }

  const toggleSave = async () => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      toast.error('Please login to save jobs')
      navigate('/login')
      return
    }
    
    try {
      const response = await jobAPI.saveJob(job._id)
      setIsSaved(response.data.saved)
      toast.success(response.data.saved ? 'Job saved for later' : 'Job removed from saved')
    } catch (error) {
      console.error('Error saving job:', error)
      toast.error('Failed to save job')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading job details...</p>
        </div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job posting you're looking for doesn't exist or has been filled.</p>
          <Link to="/jobs">
            <Button>Browse All Jobs</Button>
          </Link>
        </div>
      </div>
    )
  }

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Development': return 'bg-blue-100 text-blue-700'
      case 'Security': return 'bg-red-100 text-red-700'
      case 'DeFi': return 'bg-green-100 text-green-700'
      case 'Frontend': return 'bg-purple-100 text-purple-700'
      case 'Community': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getTypeColor = (type) => {
    switch(type) {
      case 'Full-time': return 'bg-green-100 text-green-700'
      case 'Part-time': return 'bg-blue-100 text-blue-700'
      case 'Contract': return 'bg-orange-100 text-orange-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        <Link to="/jobs" className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6 transition">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Jobs
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <img 
                    src={job.companyLogo || 'https://via.placeholder.com/80x80?text=Company'} 
                    alt={job.company}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(job.category)}`}>
                        {job.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                        {job.experience}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Building className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={toggleSave} className="text-gray-400 hover:text-primary-600 transition">
                  {isSaved ? <BookmarkCheck className="h-6 w-6 text-primary-600" /> : <Bookmark className="h-6 w-6" />}
                </button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">About the Company</h2>
              <p className="text-gray-700 leading-relaxed">{job.companyDescription || `${job.company} is a leading company in the Web3 space.`}</p>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Job Description</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>
              
              <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
              <ul className="space-y-2 mb-6">
                {job.responsibilities?.map((resp, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="space-y-2 mb-6">
                {job.requirements?.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-3">Skills Required</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {job.skills?.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-3">Benefits</h3>
              <ul className="space-y-2">
                {job.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Award className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 sticky top-24">
              {!showApplyForm ? (
                <>
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{job.salary}</div>
                    <p className="text-gray-600 text-sm">{job.type} • {job.location}</p>
                  </div>

                  <Button onClick={handleApply} size="lg" fullWidth className="mb-3">
                    Apply Now
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Posted {job.postedAt ? new Date(job.postedAt).toLocaleDateString() : 'Recently'} • {job.applicants || 0} applicants
                  </p>

                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-semibold mb-3">Job Overview</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Experience Level:</span>
                        <span className="font-medium">{job.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application Deadline:</span>
                        <span className="font-medium">{job.deadline ? new Date(job.deadline).toLocaleDateString() : 'Open until filled'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Applicants:</span>
                        <span className="font-medium">{job.applicants || 0}</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <h3 className="text-xl font-bold mb-4">Submit Application</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter *
                      </label>
                      <textarea
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder="Tell us why you're a great fit for this position..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Resume/CV *
                      </label>
                      <input
                        type="file"
                        onChange={(e) => setResumeFile(e.target.files[0])}
                        accept=".pdf,.doc,.docx"
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                      />
                    </div>
                    <div className="flex space-x-3">
                      <Button onClick={submitApplication} disabled={isApplying} className="flex-1">
                        {isApplying ? 'Submitting...' : 'Submit Application'}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" onClick={() => setShowApplyForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            <Card className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50">
              <h3 className="font-semibold mb-3">Your Skills Match</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-sm text-gray-600">You match {job.skills?.slice(0, 3).length || 0} of {job.skills?.length || 0} key skills</p>
                <Button variant="outline" size="sm" className="mt-3" onClick={handleApply}>
                  Complete Your Profile
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}