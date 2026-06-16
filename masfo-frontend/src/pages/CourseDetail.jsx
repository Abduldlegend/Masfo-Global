// import { useState, useEffect } from 'react'
// import { useParams, Link, useNavigate } from 'react-router-dom'
// import { Clock, Users, Star, BookOpen, Code, CheckCircle, ArrowLeft, Play, FileText, Award, TrendingUp, Shield, Wallet, Database, ChevronRight, Download } from 'lucide-react'
// import { Button } from '../components/common/Button'
// import { Card } from '../components/common/Card'
// import toast from 'react-hot-toast'

// // Complete course data for all slugs
// const coursesData = {
//   'blockchain-fundamentals': {
//     id: 1,
//     title: 'Blockchain Fundamentals',
//     slug: 'blockchain-fundamentals',
//     description: 'Learn the basics of blockchain technology, consensus mechanisms, and cryptocurrency.',
//     longDescription: 'This comprehensive course covers everything from the history of blockchain to advanced concepts. You will understand how cryptocurrencies work, the different types of consensus mechanisms (PoW, PoS, DPoS), and the future of decentralized technology. Hands-on exercises and real-world examples included.',
//     image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200&h=600&fit=crop',
//     duration: '6 weeks',
//     students: 1240,
//     rating: 4.8,
//     level: 'Beginner',
//     category: 'foundation',
//     price: 'Free',
//     instructor: 'Prof. Ahmed Musa',
//     instructorBio: 'Blockchain researcher with 10+ years of experience. PhD in Distributed Systems from University of Lagos.',
//     instructorImage: 'https://randomuser.me/api/portraits/men/1.jpg',
//     whatYouWillLearn: [
//       'What is Blockchain and How It Works',
//       'Cryptocurrency Fundamentals',
//       'Consensus Mechanisms (PoW, PoS, etc.)',
//       'Smart Contracts Basics',
//       'Blockchain Security',
//       'Real-world Blockchain Applications'
//     ],
//     requirements: [
//       'Basic computer knowledge',
//       'No prior blockchain experience needed',
//       'Willingness to learn'
//     ],
//     curriculum: [
//       { week: 1, title: 'Introduction to Blockchain', topics: ['What is Blockchain?', 'History of Bitcoin', 'Key Concepts'], duration: '45 min' },
//       { week: 2, title: 'Cryptography Basics', topics: ['Hashing', 'Public/Private Keys', 'Digital Signatures'], duration: '60 min' },
//       { week: 3, title: 'Consensus Mechanisms', topics: ['Proof of Work', 'Proof of Stake', 'Other Consensus Models'], duration: '50 min' },
//       { week: 4, title: 'Smart Contracts', topics: ['Introduction to Smart Contracts', 'Ethereum Basics', 'Use Cases'], duration: '55 min' },
//       { week: 5, title: 'Blockchain Security', topics: ['Security Best Practices', 'Common Attacks', 'Prevention'], duration: '50 min' },
//       { week: 6, title: 'Future of Blockchain', topics: ['Web3', 'DeFi', 'NFTs', 'Industry Trends'], duration: '40 min' }
//     ]
//   },
//   'smart-contract-development': {
//     id: 2,
//     title: 'Smart Contract Development',
//     slug: 'smart-contract-development',
//     description: 'Master Solidity, deploy smart contracts, and build on Ethereum and EVM chains.',
//     longDescription: 'Become a blockchain developer by mastering Solidity programming language. This course teaches you how to write, test, and deploy secure smart contracts on Ethereum and compatible networks. You will build real-world decentralized applications and learn industry best practices.',
//     image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=1200&h=600&fit=crop',
//     duration: '8 weeks',
//     students: 890,
//     rating: 4.9,
//     level: 'Intermediate',
//     category: 'development',
//     price: '$99',
//     instructor: 'Dr. Fatima Bello',
//     instructorBio: 'Senior Blockchain Developer at ConsenSys. PhD in Computer Science from MIT.',
//     instructorImage: 'https://randomuser.me/api/portraits/women/2.jpg',
//     whatYouWillLearn: [
//       'Solidity Programming Language',
//       'Smart Contract Development',
//       'Testing and Debugging',
//       'Gas Optimization Techniques',
//       'Security Best Practices',
//       'Deploying to Mainnet'
//     ],
//     requirements: [
//       'Basic programming knowledge',
//       'Understanding of blockchain basics',
//       'JavaScript familiarity helpful'
//     ],
//     curriculum: [
//       { week: 1, title: 'Introduction to Solidity', topics: ['Variables', 'Data Types', 'Functions'], duration: '60 min' },
//       { week: 2, title: 'Smart Contract Structure', topics: ['Constructors', 'Modifiers', 'Events'], duration: '55 min' },
//       { week: 3, title: 'ERC Standards', topics: ['ERC20', 'ERC721', 'ERC1155'], duration: '70 min' },
//       { week: 4, title: 'Testing & Debugging', topics: ['Hardhat', 'Truffle', 'Remix IDE'], duration: '65 min' },
//       { week: 5, title: 'Security', topics: ['Common Vulnerabilities', 'Auditing', 'Best Practices'], duration: '75 min' },
//       { week: 6, title: 'Gas Optimization', topics: ['Gas Costs', 'Optimization Patterns'], duration: '60 min' },
//       { week: 7, title: 'DeFi Protocols', topics: ['Uniswap', 'Aave', 'Compound'], duration: '80 min' },
//       { week: 8, title: 'Final Project', topics: ['Build a DApp', 'Deployment', 'Presentation'], duration: '120 min' }
//     ]
//   },
//   'defi-yield-farming': {
//     id: 3,
//     title: 'DeFi & Yield Farming',
//     slug: 'defi-yield-farming',
//     description: 'Understand decentralized finance, liquidity pools, yield farming strategies, and risks.',
//     longDescription: 'Decentralized Finance (DeFi) is revolutionizing the financial industry. This course covers everything from basic DeFi concepts to advanced yield farming strategies. Learn how to provide liquidity, earn yields, and navigate the risks of DeFi protocols.',
//     image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=1200&h=600&fit=crop',
//     duration: '6 weeks',
//     students: 756,
//     rating: 4.7,
//     level: 'Intermediate',
//     category: 'defi',
//     price: '$79',
//     instructor: 'Malam Umar Abdullahi',
//     instructorBio: 'DeFi researcher and yield farmer. Contributor to major DeFi protocols.',
//     instructorImage: 'https://randomuser.me/api/portraits/men/3.jpg',
//     whatYouWillLearn: [
//       'DeFi Fundamentals',
//       'Liquidity Pools',
//       'Yield Farming Strategies',
//       'Staking and Rewards',
//       'Risk Management',
//       'DeFi Protocols Deep Dive'
//     ],
//     requirements: [
//       'Basic crypto knowledge',
//       'Understanding of wallets',
//       'Interest in DeFi'
//     ],
//     curriculum: [
//       { week: 1, title: 'DeFi Basics', topics: ['What is DeFi?', 'History', 'Key Components'], duration: '50 min' },
//       { week: 2, title: 'DEX & Liquidity', topics: ['Uniswap', 'Sushiswap', 'Liquidity Pools'], duration: '60 min' },
//       { week: 3, title: 'Lending & Borrowing', topics: ['Aave', 'Compound', 'Interest Rates'], duration: '55 min' },
//       { week: 4, title: 'Yield Farming', topics: ['Strategies', 'APY vs APR', 'Impermanent Loss'], duration: '65 min' },
//       { week: 5, title: 'Risk Management', topics: ['Smart Contract Risk', 'Rug Pulls', 'Audits'], duration: '50 min' },
//       { week: 6, title: 'Advanced Strategies', topics: ['Leverage', 'Flash Loans', 'Aggregators'], duration: '70 min' }
//     ]
//   },
//   'nft-creation-marketing': {
//     id: 4,
//     title: 'NFT Creation & Marketing',
//     slug: 'nft-creation-marketing',
//     description: 'Create, mint, and market NFTs. Learn about NFT marketplaces and communities.',
//     longDescription: 'NFTs are transforming digital ownership. This course teaches you how to create, mint, and successfully market your NFTs. Learn about different marketplaces, building communities, and pricing strategies for your digital art.',
//     image: 'https://images.unsplash.com/photo-1644982647811-3f8c5a0a0c2e?w=1200&h=600&fit=crop',
//     duration: '4 weeks',
//     students: 1234,
//     rating: 4.6,
//     level: 'Beginner',
//     category: 'nft',
//     price: '$59',
//     instructor: 'Hauwa Ibrahim',
//     instructorBio: 'NFT Artist and Community Manager. Featured on OpenSea and Rarible.',
//     instructorImage: 'https://randomuser.me/api/portraits/women/4.jpg',
//     whatYouWillLearn: [
//       'NFT Fundamentals',
//       'Creating Digital Art',
//       'Minting NFTs',
//       'NFT Marketplaces',
//       'Marketing Strategies',
//       'Community Building'
//     ],
//     requirements: [
//       'Basic computer skills',
//       'Interest in digital art',
//       'Creativity and imagination'
//     ],
//     curriculum: [
//       { week: 1, title: 'NFT Basics', topics: ['What are NFTs?', 'Use Cases', 'History'], duration: '45 min' },
//       { week: 2, title: 'Creating NFTs', topics: ['Art Tools', 'Metadata', 'File Formats'], duration: '60 min' },
//       { week: 3, title: 'Minting', topics: ['OpenSea', 'Rarible', 'Gas Fees'], duration: '55 min' },
//       { week: 4, title: 'Marketing', topics: ['Twitter Strategy', 'Discord Communities', 'Pricing'], duration: '50 min' }
//     ]
//   },
//   'crypto-trading-mastery': {
//     id: 5,
//     title: 'Crypto Trading Mastery',
//     slug: 'crypto-trading-mastery',
//     description: 'Technical analysis, risk management, and profitable trading strategies.',
//     longDescription: 'Master the art of crypto trading with this comprehensive course. Learn technical analysis, chart patterns, indicators, and develop profitable trading strategies. Understand risk management and psychology to become a successful trader.',
//     image: 'https://images.unsplash.com/photo-1642104707032-f3c6c847f0d6?w=1200&h=600&fit=crop',
//     duration: '8 weeks',
//     students: 2100,
//     rating: 4.8,
//     level: 'Intermediate',
//     category: 'trading',
//     price: '$89',
//     instructor: 'Alhaji Bello Kumo',
//     instructorBio: 'Professional crypto trader with 7+ years experience. Trading mentor and analyst.',
//     instructorImage: 'https://randomuser.me/api/portraits/men/5.jpg',
//     whatYouWillLearn: [
//       'Technical Analysis',
//       'Chart Patterns',
//       'Indicators & Oscillators',
//       'Risk Management',
//       'Trading Psychology',
//       'Portfolio Management'
//     ],
//     requirements: [
//       'Basic understanding of crypto',
//       'Interest in trading',
//       'Risk capital (optional)'
//     ],
//     curriculum: [
//       { week: 1, title: 'Market Basics', topics: ['Exchanges', 'Order Types', 'Market Structure'], duration: '60 min' },
//       { week: 2, title: 'Technical Analysis', topics: ['Support/Resistance', 'Trends', 'Volume'], duration: '70 min' },
//       { week: 3, title: 'Chart Patterns', topics: ['Head & Shoulders', 'Triangles', 'Flags'], duration: '65 min' },
//       { week: 4, title: 'Indicators', topics: ['RSI', 'MACD', 'Moving Averages', 'Bollinger Bands'], duration: '75 min' },
//       { week: 5, title: 'Risk Management', topics: ['Position Sizing', 'Stop Loss', 'Take Profit'], duration: '60 min' },
//       { week: 6, title: 'Trading Psychology', topics: ['Emotions', 'Discipline', 'Mindset'], duration: '55 min' },
//       { week: 7, title: 'Strategies', topics: ['Day Trading', 'Swing Trading', 'Scalping'], duration: '70 min' },
//       { week: 8, title: 'Live Trading', topics: ['Practice Sessions', 'Analysis', 'Review'], duration: '90 min' }
//     ]
//   },
//   'web3-development': {
//     id: 6,
//     title: 'Web3 Development',
//     slug: 'web3-development',
//     description: 'Build decentralized applications using React, Ethers.js, and Web3 libraries.',
//     longDescription: 'Learn to build full-stack decentralized applications (dApps). This course covers frontend integration with blockchain using React, Ethers.js, and Web3.js. Build real projects and understand the complete Web3 stack.',
//     image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&h=600&fit=crop',
//     duration: '10 weeks',
//     students: 678,
//     rating: 4.9,
//     level: 'Advanced',
//     category: 'development',
//     price: '$149',
//     instructor: 'Engr. Yusuf Muhammad',
//     instructorBio: 'Full-stack Web3 developer. Built multiple dApps on Ethereum and Polygon.',
//     instructorImage: 'https://randomuser.me/api/portraits/men/6.jpg',
//     whatYouWillLearn: [
//       'Web3 Architecture',
//       'Ethers.js & Web3.js',
//       'React Integration',
//       'Wallet Connection',
//       'Smart Contract Interaction',
//       'Full dApp Development'
//     ],
//     requirements: [
//       'React knowledge',
//       'JavaScript proficiency',
//       'Understanding of smart contracts'
//     ],
//     curriculum: [
//       { week: 1, title: 'Web3 Architecture', topics: ['Frontend', 'Blockchain', 'IPFS'], duration: '60 min' },
//       { week: 2, title: 'Wallet Integration', topics: ['MetaMask', 'WalletConnect', 'Web3Modal'], duration: '70 min' },
//       { week: 3, title: 'Ethers.js', topics: ['Providers', 'Signers', 'Contracts'], duration: '80 min' },
//       { week: 4, title: 'React + Web3', topics: ['Hooks', 'Context', 'State Management'], duration: '75 min' },
//       { week: 5, title: 'Reading Blockchain Data', topics: ['Queries', 'Events', 'Logs'], duration: '65 min' },
//       { week: 6, title: 'Writing Transactions', topics: ['Sending Tx', 'Gas Management'], duration: '70 min' },
//       { week: 7, title: 'IPFS Integration', topics: ['File Upload', 'Pinning', 'Retrieval'], duration: '60 min' },
//       { week: 8, title: 'Testing', topics: ['Unit Tests', 'Integration Tests'], duration: '55 min' },
//       { week: 9, title: 'Deployment', topics: ['Hosting', 'Domain', 'CI/CD'], duration: '50 min' },
//       { week: 10, title: 'Final Project', topics: ['Build a Complete dApp'], duration: '120 min' }
//     ]
//   },
//   'blockchain-security': {
//     id: 7,
//     title: 'Blockchain Security',
//     slug: 'blockchain-security',
//     description: 'Smart contract auditing, security best practices, and vulnerability detection.',
//     longDescription: 'Become a blockchain security expert. Learn to identify vulnerabilities, perform smart contract audits, and implement security best practices. This course is essential for developers and security professionals.',
//     image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop',
//     duration: '6 weeks',
//     students: 432,
//     rating: 4.9,
//     level: 'Advanced',
//     category: 'security',
//     price: '$129',
//     instructor: 'Prof. Sani Abacha',
//     instructorBio: 'Blockchain security researcher. Certified Smart Contract Auditor.',
//     instructorImage: 'https://randomuser.me/api/portraits/men/7.jpg',
//     whatYouWillLearn: [
//       'Security Fundamentals',
//       'Common Vulnerabilities',
//       'Smart Contract Auditing',
//       'Security Tools',
//       'Bug Bounties',
//       'Secure Development'
//     ],
//     requirements: [
//       'Solidity knowledge',
//       'Understanding of smart contracts',
//       'Security mindset'
//     ],
//     curriculum: [
//       { week: 1, title: 'Security Basics', topics: ['Threat Modeling', 'Attack Vectors'], duration: '60 min' },
//       { week: 2, title: 'Common Vulnerabilities', topics: ['Re-entrancy', 'Overflow', 'Front-running'], duration: '75 min' },
//       { week: 3, title: 'Auditing Tools', topics: ['Slither', 'Mythril', 'Securify'], duration: '70 min' },
//       { week: 4, title: 'Manual Auditing', topics: ['Code Review', 'Patterns', 'Best Practices'], duration: '80 min' },
//       { week: 5, title: 'Bug Bounties', topics: ['Platforms', 'Reporting', 'Rewards'], duration: '55 min' },
//       { week: 6, title: 'Secure Development', topics: ['Best Practices', 'Standards', 'Checklists'], duration: '65 min' }
//     ]
//   },
//   'crypto-regulations': {
//     id: 8,
//     title: 'Crypto Regulations',
//     slug: 'crypto-regulations',
//     description: 'Understand global crypto regulations, compliance, and legal frameworks.',
//     longDescription: 'Navigate the complex world of crypto regulations. This course covers global regulatory frameworks, compliance requirements, and legal considerations for crypto businesses and investors.',
//     image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop',
//     duration: '4 weeks',
//     students: 567,
//     rating: 4.5,
//     level: 'Beginner',
//     category: 'foundation',
//     price: 'Free',
//     instructor: 'Barr. Aisha Garba',
//     instructorBio: 'Crypto legal expert. Advises blockchain companies on regulatory compliance.',
//     instructorImage: 'https://randomuser.me/api/portraits/women/8.jpg',
//     whatYouWillLearn: [
//       'Global Regulations',
//       'KYC/AML Requirements',
//       'Tax Implications',
//       'Compliance Frameworks',
//       'Legal Considerations',
//       'Future Regulations'
//     ],
//     requirements: [
//       'No prior knowledge needed',
//       'Interest in crypto laws',
//       'Basic understanding of crypto'
//     ],
//     curriculum: [
//       { week: 1, title: 'Regulatory Landscape', topics: ['Global Overview', 'Key Regulators'], duration: '50 min' },
//       { week: 2, title: 'KYC/AML', topics: ['Requirements', 'Implementation', 'Tools'], duration: '60 min' },
//       { week: 3, title: 'Tax & Legal', topics: ['Taxation', 'Legal Structures', 'Reporting'], duration: '55 min' },
//       { week: 4, title: 'Compliance', topics: ['Best Practices', 'Audits', 'Future Trends'], duration: '45 min' }
//     ]
//   }
// }

// export const CourseDetail = () => {
//   const { slug } = useParams()
//   const navigate = useNavigate()
//   const [isEnrolling, setIsEnrolling] = useState(false)
//   const [activeTab, setActiveTab] = useState('overview')
  
//   const course = coursesData[slug]

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [slug])

//   const handleEnroll = () => {
//     const token = localStorage.getItem('token')
    
//     if (!token) {
//       localStorage.setItem('redirectAfterLogin', `/courses/${slug}`)
//       toast.error('Please login or sign up to enroll in this course', {
//         duration: 3000,
//         position: 'top-center',
//       })
//       navigate('/login')
//     } else {
//       setIsEnrolling(true)
//       setTimeout(() => {
//         toast.success('Successfully enrolled in the course! 🎉', {
//           duration: 3000,
//           position: 'top-center',
//         })
//         setIsEnrolling(false)
//         navigate('/dashboard')
//       }, 1500)
//     }
//   }

//   if (!course) {
//     return (
//       <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
//         <div className="text-center">
//           <div className="text-6xl mb-4">🔍</div>
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
//           <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
//           <Link to="/courses">
//             <Button>Browse All Courses</Button>
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   const getCategoryIcon = (category) => {
//     switch(category) {
//       case 'foundation': return <BookOpen className="h-5 w-5" />
//       case 'development': return <Code className="h-5 w-5" />
//       case 'defi': return <TrendingUp className="h-5 w-5" />
//       case 'nft': return <Wallet className="h-5 w-5" />
//       case 'trading': return <TrendingUp className="h-5 w-5" />
//       case 'security': return <Shield className="h-5 w-5" />
//       default: return <Database className="h-5 w-5" />
//     }
//   }

//   const getLevelColor = (level) => {
//     switch(level.toLowerCase()) {
//       case 'beginner': return 'bg-green-100 text-green-700'
//       case 'intermediate': return 'bg-yellow-100 text-yellow-700'
//       case 'advanced': return 'bg-red-100 text-red-700'
//       default: return 'bg-gray-100 text-gray-700'
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative h-96 overflow-hidden">
//         <img 
//           src={course.image} 
//           alt={course.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />
//         <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//           <div className="container-custom">
//             <div className="flex items-center space-x-3 mb-4">
//               <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}>
//                 {course.level}
//               </span>
//               <span className="flex items-center space-x-1 text-sm">
//                 {getCategoryIcon(course.category)}
//                 <span className="capitalize">{course.category}</span>
//               </span>
//               {course.price === 'Free' && (
//                 <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">
//                   Free
//                 </span>
//               )}
//             </div>
//             <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl">{course.title}</h1>
//             <p className="text-lg md:text-xl text-gray-200 max-w-3xl">{course.description}</p>
//           </div>
//         </div>
//         <Link 
//           to="/courses" 
//           className="absolute top-24 left-4 md:left-8 bg-white/90 hover:bg-white rounded-lg px-3 py-2 md:px-4 md:py-2 text-gray-700 flex items-center space-x-2 transition z-10"
//         >
//           <ArrowLeft className="h-4 w-4" />
//           <span className="hidden md:inline">Back to Courses</span>
//           <span className="md:hidden">Back</span>
//         </Link>
//       </div>

//       <div className="container-custom py-8 md:py-12">
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Tabs */}
//             <div className="bg-white rounded-lg shadow-sm border-b">
//               <div className="flex overflow-x-auto">
//                 {['overview', 'curriculum', 'instructor'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-4 md:px-6 py-3 font-medium transition-colors whitespace-nowrap ${
//                       activeTab === tab
//                         ? 'text-primary-600 border-b-2 border-primary-600'
//                         : 'text-gray-600 hover:text-primary-600'
//                     }`}
//                   >
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Overview Tab */}
//             {activeTab === 'overview' && (
//               <div className="space-y-6">
//                 <Card className="p-6">
//                   <h2 className="text-2xl font-bold mb-4">Course Description</h2>
//                   <p className="text-gray-700 leading-relaxed">{course.longDescription}</p>
//                 </Card>

//                 <Card className="p-6">
//                   <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
//                   <div className="grid md:grid-cols-2 gap-3">
//                     {course.whatYouWillLearn.map((item, index) => (
//                       <div key={index} className="flex items-center space-x-2">
//                         <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
//                         <span className="text-gray-700">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </Card>

//                 <Card className="p-6">
//                   <h2 className="text-2xl font-bold mb-4">Requirements</h2>
//                   <ul className="space-y-2">
//                     {course.requirements.map((req, index) => (
//                       <li key={index} className="flex items-center space-x-2">
//                         <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
//                         <span className="text-gray-700">{req}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </Card>
//               </div>
//             )}

//             {/* Curriculum Tab */}
//             {activeTab === 'curriculum' && (
//               <Card className="p-6">
//                 <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
//                 <div className="space-y-4">
//                   {course.curriculum.map((week, index) => (
//                     <div key={index} className="border rounded-lg overflow-hidden">
//                       <div className="bg-gray-50 p-4 font-semibold flex justify-between items-center">
//                         <span>Week {week.week}: {week.title}</span>
//                         <span className="text-sm text-gray-500">{week.duration}</span>
//                       </div>
//                       <ul className="p-4 space-y-2">
//                         {week.topics.map((topic, topicIndex) => (
//                           <li key={topicIndex} className="flex items-center space-x-2 text-gray-600">
//                             <Play className="h-4 w-4 text-primary-500" />
//                             <span>{topic}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </Card>
//             )}

//             {/* Instructor Tab */}
//             {activeTab === 'instructor' && (
//               <Card className="p-6">
//                 <div className="flex items-start space-x-4">
//                   <img 
//                     src={course.instructorImage} 
//                     alt={course.instructor}
//                     className="w-20 h-20 rounded-full object-cover"
//                   />
//                   <div className="flex-1">
//                     <h2 className="text-xl font-bold">{course.instructor}</h2>
//                     <p className="text-gray-600 mt-1">{course.instructorBio}</p>
//                   </div>
//                 </div>
//               </Card>
//             )}
//           </div>

//           {/* Sidebar - Enrollment Card */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24">
//               <Card className="p-6">
//                 <div className="text-center mb-6">
//                   {course.price === 'Free' ? (
//                     <>
//                       <div className="text-3xl font-bold text-green-600">Free</div>
//                       <p className="text-gray-500 text-sm mt-1">Full access at no cost</p>
//                     </>
//                   ) : (
//                     <>
//                       <div className="text-3xl font-bold text-primary-600">{course.price}</div>
//                       <p className="text-gray-500 text-sm mt-1">One-time payment</p>
//                     </>
//                   )}
//                 </div>

//                 <div className="space-y-3 mb-6">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Duration:</span>
//                     <span className="font-semibold">{course.duration}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Students:</span>
//                     <span className="font-semibold">{course.students.toLocaleString()}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Rating:</span>
//                     <div className="flex items-center space-x-1">
//                       <Star className="h-4 w-4 text-yellow-400 fill-current" />
//                       <span className="font-semibold">{course.rating}</span>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Certificate:</span>
//                     <span className="font-semibold text-green-600">Yes</span>
//                   </div>
//                 </div>

//                 <Button 
//                   onClick={handleEnroll}
//                   fullWidth 
//                   size="lg"
//                   disabled={isEnrolling}
//                   className="mb-3"
//                 >
//                   {isEnrolling ? 'Enrolling...' : 'Enroll Now'}
//                 </Button>

//                 <p className="text-xs text-gray-500 text-center">
//                   Lifetime access • Download resources • Certificate of completion
//                 </p>
//               </Card>

//               {/* Features Card */}
//               <Card className="p-6 mt-6">
//                 <h3 className="font-bold mb-3">This course includes:</h3>
//                 <ul className="space-y-2 text-sm">
//                   <li className="flex items-center space-x-2">
//                     <Play className="h-4 w-4 text-primary-500" />
//                     <span>{course.curriculum.length} weeks of content</span>
//                   </li>
//                   <li className="flex items-center space-x-2">
//                     <FileText className="h-4 w-4 text-primary-500" />
//                     <span>Downloadable resources</span>
//                   </li>
//                   <li className="flex items-center space-x-2">
//                     <Award className="h-4 w-4 text-primary-500" />
//                     <span>Blockchain certificate</span>
//                   </li>
//                   <li className="flex items-center space-x-2">
//                     <Users className="h-4 w-4 text-primary-500" />
//                     <span>Community access</span>
//                   </li>
//                 </ul>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Clock, Users, Star, BookOpen, Code, CheckCircle, ArrowLeft, Play, FileText, Award, TrendingUp, Shield, Wallet, Database, ChevronRight } from 'lucide-react'
import { Button } from '../components/common/Button'
import { Card } from '../components/common/Card'
import { courseAPI } from '../services/api'
import toast from 'react-hot-toast'

export const CourseDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [course, setCourse] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isEnrolling, setIsEnrolling] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const fetchCourse = async () => {
      setIsLoading(true)
      try {
        const response = await courseAPI.getBySlug(slug)
        setCourse(response.data.data.course)
        window.scrollTo(0, 0)
      } catch (error) {
        console.error('Error fetching course:', error)
        if (error.response?.status === 404) {
          toast.error('Course not found')
        } else {
          toast.error('Failed to load course')
        }
      } finally {
        setIsLoading(false)
      }
    }
    
    if (slug) {
      fetchCourse()
    }
  }, [slug])

  const handleEnroll = async () => {
    const token = localStorage.getItem('accessToken')
    
    if (!token) {
      localStorage.setItem('redirectAfterLogin', `/courses/${slug}`)
      toast.error('Please login or sign up to enroll in this course', {
        duration: 3000,
        position: 'top-center',
      })
      navigate('/login')
      return
    }
    
    setIsEnrolling(true)
    try {
      await courseAPI.enroll(course._id)
      toast.success('Successfully enrolled in the course! 🎉', {
        duration: 3000,
        position: 'top-center',
      })
      navigate('/dashboard')
    } catch (error) {
      console.error('Enrollment error:', error)
      toast.error(error.response?.data?.message || 'Failed to enroll')
    } finally {
      setIsEnrolling(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course...</p>
        </div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/courses">
            <Button>Browse All Courses</Button>
          </Link>
        </div>
      </div>
    )
  }

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'foundation': return <BookOpen className="h-5 w-5" />
      case 'development': return <Code className="h-5 w-5" />
      case 'defi': return <TrendingUp className="h-5 w-5" />
      case 'nft': return <Wallet className="h-5 w-5" />
      case 'trading': return <TrendingUp className="h-5 w-5" />
      case 'security': return <Shield className="h-5 w-5" />
      default: return <Database className="h-5 w-5" />
    }
  }

  const getLevelColor = (level) => {
    switch(level?.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-700'
      case 'intermediate': return 'bg-yellow-100 text-yellow-700'
      case 'advanced': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96 overflow-hidden">
        <img 
          src={course.image || 'https://via.placeholder.com/1200x600?text=Course'} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container-custom">
            <div className="flex items-center space-x-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}>
                {course.level}
              </span>
              <span className="flex items-center space-x-1 text-sm">
                {getCategoryIcon(course.category)}
                <span className="capitalize">{course.category}</span>
              </span>
              {course.price === 'Free' && (
                <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">
                  Free
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl">{course.title}</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">{course.description}</p>
          </div>
        </div>
        <Link 
          to="/courses" 
          className="absolute top-24 left-4 md:left-8 bg-white/90 hover:bg-white rounded-lg px-3 py-2 md:px-4 md:py-2 text-gray-700 flex items-center space-x-2 transition z-10"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden md:inline">Back to Courses</span>
          <span className="md:hidden">Back</span>
        </Link>
      </div>

      <div className="container-custom py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border-b">
              <div className="flex overflow-x-auto">
                {['overview', 'curriculum', 'instructor'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 md:px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-600 hover:text-primary-600'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                  <p className="text-gray-700 leading-relaxed">{course.longDescription || course.description}</p>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.whatYouWillLearn?.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {course.requirements?.map((req, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum?.map((week, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 font-semibold flex justify-between items-center">
                        <span>Week {week.week}: {week.title}</span>
                        <span className="text-sm text-gray-500">{week.duration}</span>
                      </div>
                      <ul className="p-4 space-y-2">
                        {week.topics?.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center space-x-2 text-gray-600">
                            <Play className="h-4 w-4 text-primary-500" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeTab === 'instructor' && (
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={course.instructor?.avatar || 'https://via.placeholder.com/80x80?text=Instructor'} 
                    alt={course.instructor?.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-bold">{course.instructor?.name}</h2>
                    <p className="text-gray-600 mt-1">{course.instructor?.bio}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="p-6">
                <div className="text-center mb-6">
                  {course.price === 'Free' ? (
                    <>
                      <div className="text-3xl font-bold text-green-600">Free</div>
                      <p className="text-gray-500 text-sm mt-1">Full access at no cost</p>
                    </>
                  ) : (
                    <>
                      <div className="text-3xl font-bold text-primary-600">{course.price}</div>
                      <p className="text-gray-500 text-sm mt-1">One-time payment</p>
                    </>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-semibold">{course.students?.toLocaleString() || 0}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{course.rating || 0}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Certificate:</span>
                    <span className="font-semibold text-green-600">Yes</span>
                  </div>
                </div>

                <Button 
                  onClick={handleEnroll}
                  fullWidth 
                  size="lg"
                  disabled={isEnrolling}
                  className="mb-3"
                >
                  {isEnrolling ? 'Enrolling...' : 'Enroll Now'}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Lifetime access • Download resources • Certificate of completion
                </p>
              </Card>

              <Card className="p-6 mt-6">
                <h3 className="font-bold mb-3">This course includes:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Play className="h-4 w-4 text-primary-500" />
                    <span>{course.curriculum?.length || 0} weeks of content</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-primary-500" />
                    <span>Downloadable resources</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-primary-500" />
                    <span>Blockchain certificate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary-500" />
                    <span>Community access</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}