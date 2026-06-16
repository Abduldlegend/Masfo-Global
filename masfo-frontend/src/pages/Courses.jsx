// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Search, Filter, Clock, Users, Star, ArrowRight, BookOpen, Code, TrendingUp, Shield, Database, Wallet } from 'lucide-react'
// import { Card } from '../components/common/Card'
// import { Button } from '../components/common/Button'

// const courses = [
//   {
//     id: 1,
//     title: 'Blockchain Fundamentals',
//     slug: 'blockchain-fundamentals',
//     description: 'Learn the basics of blockchain technology, consensus mechanisms, and cryptocurrency. Perfect for beginners!',
//     longDescription: 'This comprehensive course covers everything from the history of blockchain to advanced concepts. You will understand how cryptocurrencies work, the different types of consensus mechanisms (PoW, PoS, DPoS), and the future of decentralized technology. Hands-on exercises and real-world examples included.',
//     image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&h=400&fit=crop',
//     duration: '6 weeks',
//     students: 1240,
//     rating: 4.8,
//     level: 'Beginner',
//     category: 'foundation',
//     price: 'Free',
//     instructor: 'Prof. Ahmed Musa',
//     whatYouWillLearn: [
//       'What is Blockchain and How It Works',
//       'Cryptocurrency Fundamentals',
//       'Consensus Mechanisms (PoW, PoS, etc.)',
//       'Smart Contracts Basics',
//       'Blockchain Security',
//       'Real-world Blockchain Applications'
//     ],
//     curriculum: [
//       { week: 1, title: 'Introduction to Blockchain', topics: ['What is Blockchain?', 'History of Bitcoin', 'Key Concepts'] },
//       { week: 2, title: 'Cryptography Basics', topics: ['Hashing', 'Public/Private Keys', 'Digital Signatures'] },
//       { week: 3, title: 'Consensus Mechanisms', topics: ['Proof of Work', 'Proof of Stake', 'Other Consensus Models'] },
//       { week: 4, title: 'Smart Contracts', topics: ['Introduction to Smart Contracts', 'Ethereum Basics', 'Use Cases'] },
//       { week: 5, title: 'Blockchain Security', topics: ['Security Best Practices', 'Common Attacks', 'Prevention'] },
//       { week: 6, title: 'Future of Blockchain', topics: ['Web3', 'DeFi', 'NFTs', 'Industry Trends'] }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Smart Contract Development',
//     slug: 'smart-contract-development',
//     description: 'Master Solidity, deploy smart contracts, and build on Ethereum and EVM chains.',
//     longDescription: 'Become a blockchain developer by mastering Solidity programming language. This course teaches you how to write, test, and deploy secure smart contracts on Ethereum and compatible networks. You will build real-world decentralized applications and learn industry best practices.',
//     image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=600&h=400&fit=crop',
//     duration: '8 weeks',
//     students: 890,
//     rating: 4.9,
//     level: 'Intermediate',
//     category: 'development',
//     price: '$99',
//     instructor: 'Dr. Fatima Bello',
//     whatYouWillLearn: [
//       'Solidity Programming Language',
//       'Smart Contract Development',
//       'Testing and Debugging',
//       'Gas Optimization Techniques',
//       'Security Best Practices',
//       'Deploying to Mainnet'
//     ],
//     curriculum: [
//       { week: 1, title: 'Introduction to Solidity', topics: ['Variables', 'Data Types', 'Functions'] },
//       { week: 2, title: 'Smart Contract Structure', topics: ['Constructors', 'Modifiers', 'Events'] },
//       { week: 3, title: 'ERC Standards', topics: ['ERC20', 'ERC721', 'ERC1155'] },
//       { week: 4, title: 'Testing & Debugging', topics: ['Hardhat', 'Truffle', 'Remix IDE'] },
//       { week: 5, title: 'Security', topics: ['Common Vulnerabilities', 'Auditing', 'Best Practices'] },
//       { week: 6, title: 'Gas Optimization', topics: ['Gas Costs', 'Optimization Patterns'] },
//       { week: 7, title: 'DeFi Protocols', topics: ['Uniswap', 'Aave', 'Compound'] },
//       { week: 8, title: 'Final Project', topics: ['Build a DApp', 'Deployment', 'Presentation'] }
//     ]
//   },
//   {
//     id: 3,
//     title: 'DeFi & Yield Farming',
//     slug: 'defi-yield-farming',
//     description: 'Understand decentralized finance, liquidity pools, yield farming strategies, and risks.',
//     longDescription: 'Decentralized Finance (DeFi) is revolutionizing the financial industry. This course covers everything from basic DeFi concepts to advanced yield farming strategies. Learn how to provide liquidity, earn yields, and navigate the risks of DeFi protocols.',
//     image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=600&h=400&fit=crop',
//     duration: '6 weeks',
//     students: 756,
//     rating: 4.7,
//     level: 'Intermediate',
//     category: 'defi',
//     price: '$79',
//     instructor: 'Malam Umar Abdullahi',
//     whatYouWillLearn: [
//       'DeFi Fundamentals',
//       'Liquidity Pools',
//       'Yield Farming Strategies',
//       'Staking and Rewards',
//       'Risk Management',
//       'DeFi Protocols Deep Dive'
//     ],
//     curriculum: [
//       { week: 1, title: 'DeFi Basics', topics: ['What is DeFi?', 'History', 'Key Components'] },
//       { week: 2, title: 'DEX & Liquidity', topics: ['Uniswap', 'Sushiswap', 'Liquidity Pools'] },
//       { week: 3, title: 'Lending & Borrowing', topics: ['Aave', 'Compound', 'Interest Rates'] },
//       { week: 4, title: 'Yield Farming', topics: ['Strategies', 'APY vs APR', 'Impermanent Loss'] },
//       { week: 5, title: 'Risk Management', topics: ['Smart Contract Risk', 'Rug Pulls', 'Audits'] },
//       { week: 6, title: 'Advanced Strategies', topics: ['Leverage', 'Flash Loans', 'Aggregators'] }
//     ]
//   },
//   {
//     id: 4,
//     title: 'NFT Creation & Marketing',
//     slug: 'nft-creation-marketing',
//     description: 'Create, mint, and market NFTs. Learn about NFT marketplaces and communities.',
//     longDescription: 'NFTs are transforming digital ownership. This course teaches you how to create, mint, and successfully market your NFTs. Learn about different marketplaces, building communities, and pricing strategies for your digital art.',
//     image: 'https://images.unsplash.com/photo-1644982647811-3f8c5a0a0c2e?w=600&h=400&fit=crop',
//     duration: '4 weeks',
//     students: 1234,
//     rating: 4.6,
//     level: 'Beginner',
//     category: 'nft',
//     price: '$59',
//     instructor: 'Hauwa Ibrahim',
//     whatYouWillLearn: [
//       'NFT Fundamentals',
//       'Creating Digital Art',
//       'Minting NFTs',
//       'NFT Marketplaces',
//       'Marketing Strategies',
//       'Community Building'
//     ],
//     curriculum: [
//       { week: 1, title: 'NFT Basics', topics: ['What are NFTs?', 'Use Cases', 'History'] },
//       { week: 2, title: 'Creating NFTs', topics: ['Art Tools', 'Metadata', 'File Formats'] },
//       { week: 3, title: 'Minting', topics: ['OpenSea', 'Rarible', 'Gas Fees'] },
//       { week: 4, title: 'Marketing', topics: ['Twitter Strategy', 'Discord Communities', 'Pricing'] }
//     ]
//   },
//   {
//     id: 5,
//     title: 'Crypto Trading Mastery',
//     slug: 'crypto-trading-mastery',
//     description: 'Technical analysis, risk management, and profitable trading strategies.',
//     longDescription: 'Master the art of crypto trading with this comprehensive course. Learn technical analysis, chart patterns, indicators, and develop profitable trading strategies. Understand risk management and psychology to become a successful trader.',
//     image: 'https://images.unsplash.com/photo-1642104707032-f3c6c847f0d6?w=600&h=400&fit=crop',
//     duration: '8 weeks',
//     students: 2100,
//     rating: 4.8,
//     level: 'Intermediate',
//     category: 'trading',
//     price: '$89',
//     instructor: 'Alhaji Bello Kumo',
//     whatYouWillLearn: [
//       'Technical Analysis',
//       'Chart Patterns',
//       'Indicators & Oscillators',
//       'Risk Management',
//       'Trading Psychology',
//       'Portfolio Management'
//     ],
//     curriculum: [
//       { week: 1, title: 'Market Basics', topics: ['Exchanges', 'Order Types', 'Market Structure'] },
//       { week: 2, title: 'Technical Analysis', topics: ['Support/Resistance', 'Trends', 'Volume'] },
//       { week: 3, title: 'Chart Patterns', topics: ['Head & Shoulders', 'Triangles', 'Flags'] },
//       { week: 4, title: 'Indicators', topics: ['RSI', 'MACD', 'Moving Averages', 'Bollinger Bands'] },
//       { week: 5, title: 'Risk Management', topics: ['Position Sizing', 'Stop Loss', 'Take Profit'] },
//       { week: 6, title: 'Trading Psychology', topics: ['Emotions', 'Discipline', 'Mindset'] },
//       { week: 7, title: 'Strategies', topics: ['Day Trading', 'Swing Trading', 'Scalping'] },
//       { week: 8, title: 'Live Trading', topics: ['Practice Sessions', 'Analysis', 'Review'] }
//     ]
//   },
//   {
//     id: 6,
//     title: 'Web3 Development',
//     slug: 'web3-development',
//     description: 'Build decentralized applications using React, Ethers.js, and Web3 libraries.',
//     longDescription: 'Learn to build full-stack decentralized applications (dApps). This course covers frontend integration with blockchain using React, Ethers.js, and Web3.js. Build real projects and understand the complete Web3 stack.',
//     image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop',
//     duration: '10 weeks',
//     students: 678,
//     rating: 4.9,
//     level: 'Advanced',
//     category: 'development',
//     price: '$149',
//     instructor: 'Engr. Yusuf Muhammad',
//     whatYouWillLearn: [
//       'Web3 Architecture',
//       'Ethers.js & Web3.js',
//       'React Integration',
//       'Wallet Connection',
//       'Smart Contract Interaction',
//       'Full dApp Development'
//     ],
//     curriculum: [
//       { week: 1, title: 'Web3 Architecture', topics: ['Frontend', 'Blockchain', 'IPFS'] },
//       { week: 2, title: 'Wallet Integration', topics: ['MetaMask', 'WalletConnect', 'Web3Modal'] },
//       { week: 3, title: 'Ethers.js', topics: ['Providers', 'Signers', 'Contracts'] },
//       { week: 4, title: 'React + Web3', topics: ['Hooks', 'Context', 'State Management'] },
//       { week: 5, title: 'Reading Blockchain Data', topics: ['Queries', 'Events', 'Logs'] },
//       { week: 6, title: 'Writing Transactions', topics: ['Sending Tx', 'Gas Management'] },
//       { week: 7, title: 'IPFS Integration', topics: ['File Upload', 'Pinning', 'Retrieval'] },
//       { week: 8, title: 'Testing', topics: ['Unit Tests', 'Integration Tests'] },
//       { week: 9, title: 'Deployment', topics: ['Hosting', 'Domain', 'CI/CD'] },
//       { week: 10, title: 'Final Project', topics: ['Build a Complete dApp'] }
//     ]
//   },
//   {
//     id: 7,
//     title: 'Blockchain Security',
//     slug: 'blockchain-security',
//     description: 'Smart contract auditing, security best practices, and vulnerability detection.',
//     longDescription: 'Become a blockchain security expert. Learn to identify vulnerabilities, perform smart contract audits, and implement security best practices. This course is essential for developers and security professionals.',
//     image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop',
//     duration: '6 weeks',
//     students: 432,
//     rating: 4.9,
//     level: 'Advanced',
//     category: 'security',
//     price: '$129',
//     instructor: 'Prof. Sani Abacha',
//     whatYouWillLearn: [
//       'Security Fundamentals',
//       'Common Vulnerabilities',
//       'Smart Contract Auditing',
//       'Security Tools',
//       'Bug Bounties',
//       'Secure Development'
//     ],
//     curriculum: [
//       { week: 1, title: 'Security Basics', topics: ['Threat Modeling', 'Attack Vectors'] },
//       { week: 2, title: 'Common Vulnerabilities', topics: ['Re-entrancy', 'Overflow', 'Front-running'] },
//       { week: 3, title: 'Auditing Tools', topics: ['Slither', 'Mythril', 'Securify'] },
//       { week: 4, title: 'Manual Auditing', topics: ['Code Review', 'Patterns', 'Best Practices'] },
//       { week: 5, title: 'Bug Bounties', topics: ['Platforms', 'Reporting', 'Rewards'] },
//       { week: 6, title: 'Secure Development', topics: ['Best Practices', 'Standards', 'Checklists'] }
//     ]
//   },
//   {
//     id: 8,
//     title: 'Crypto Regulations',
//     slug: 'crypto-regulations',
//     description: 'Understand global crypto regulations, compliance, and legal frameworks.',
//     longDescription: 'Navigate the complex world of crypto regulations. This course covers global regulatory frameworks, compliance requirements, and legal considerations for crypto businesses and investors.',
//     image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
//     duration: '4 weeks',
//     students: 567,
//     rating: 4.5,
//     level: 'Beginner',
//     category: 'foundation',
//     price: 'Free',
//     instructor: 'Barr. Aisha Garba',
//     whatYouWillLearn: [
//       'Global Regulations',
//       'KYC/AML Requirements',
//       'Tax Implications',
//       'Compliance Frameworks',
//       'Legal Considerations',
//       'Future Regulations'
//     ],
//     curriculum: [
//       { week: 1, title: 'Regulatory Landscape', topics: ['Global Overview', 'Key Regulators'] },
//       { week: 2, title: 'KYC/AML', topics: ['Requirements', 'Implementation', 'Tools'] },
//       { week: 3, title: 'Tax & Legal', topics: ['Taxation', 'Legal Structures', 'Reporting'] },
//       { week: 4, title: 'Compliance', topics: ['Best Practices', 'Audits', 'Future Trends'] }
//     ]
//   }
// ]

// export const Courses = () => {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedCategory, setSelectedCategory] = useState('all')
//   const [selectedLevel, setSelectedLevel] = useState('all')

//   const categories = ['all', 'foundation', 'development', 'defi', 'nft', 'trading', 'security']
//   const levels = ['all', 'beginner', 'intermediate', 'advanced']

//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           course.description.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
//     const matchesLevel = selectedLevel === 'all' || course.level.toLowerCase() === selectedLevel
    
//     return matchesSearch && matchesCategory && matchesLevel
//   })

//   const getLevelColor = (level) => {
//     switch(level.toLowerCase()) {
//       case 'beginner': return 'bg-green-100 text-green-700'
//       case 'intermediate': return 'bg-yellow-100 text-yellow-700'
//       case 'advanced': return 'bg-red-100 text-red-700'
//       default: return 'bg-gray-100 text-gray-700'
//     }
//   }

//   const getCategoryIcon = (category) => {
//     switch(category) {
//       case 'foundation': return <BookOpen className="h-4 w-4" />
//       case 'development': return <Code className="h-4 w-4" />
//       case 'defi': return <TrendingUp className="h-4 w-4" />
//       case 'nft': return <Wallet className="h-4 w-4" />
//       case 'trading': return <TrendingUp className="h-4 w-4" />
//       case 'security': return <Shield className="h-4 w-4" />
//       default: return <Database className="h-4 w-4" />
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 pt-24">
//       <div className="container-custom">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Our <span className="gradient-text">Courses</span>
//           </h1>
//           <p className="text-xl text-gray-600">
//             Comprehensive blockchain and cryptocurrency courses taught by industry experts
//           </p>
//         </div>

//         {/* Search and Filters */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <div className="grid md:grid-cols-3 gap-4">
//             {/* Search */}
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//               />
//             </div>

//             {/* Category Filter */}
//             <div className="relative">
//               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
//               >
//                 {categories.map(cat => (
//                   <option key={cat} value={cat}>
//                     {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Level Filter */}
//             <div className="relative">
//               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <select
//                 value={selectedLevel}
//                 onChange={(e) => setSelectedLevel(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
//               >
//                 {levels.map(level => (
//                   <option key={level} value={level}>
//                     {level.charAt(0).toUpperCase() + level.slice(1)}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-gray-600">Found {filteredCourses.length} courses</p>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredCourses.map((course) => (
//             <Card key={course.id} hover className="overflow-hidden group">
//               <div className="relative h-48 overflow-hidden">
//                 <img 
//                   src={course.image} 
//                   alt={course.title}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute top-3 right-3">
//                   <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
//                     {course.level}
//                   </span>
//                 </div>
//                 {course.price === 'Free' && (
//                   <div className="absolute bottom-3 left-3">
//                     <span className="px-2 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">
//                       Free
//                     </span>
//                   </div>
//                 )}
//               </div>
              
//               <div className="p-5">
//                 <div className="flex items-center space-x-2 mb-2">
//                   {getCategoryIcon(course.category)}
//                   <span className="text-xs text-gray-500 capitalize">{course.category}</span>
//                 </div>
                
//                 <h3 className="text-xl font-bold mb-2 line-clamp-1">{course.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                
//                 <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
//                   <div className="flex items-center space-x-1">
//                     <Clock className="h-4 w-4" />
//                     <span>{course.duration}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Users className="h-4 w-4" />
//                     <span>{course.students.toLocaleString()}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Star className="h-4 w-4 text-yellow-400 fill-current" />
//                     <span>{course.rating}</span>
//                   </div>
//                 </div>
                
//                 <Link to={`/courses/${course.slug}`}>
//                   <Button variant="outline" fullWidth className="group">
//                     View Details
//                     <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
//                   </Button>
//                 </Link>
//               </div>
//             </Card>
//           ))}
//         </div>

//         {filteredCourses.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
//             <button
//               onClick={() => {
//                 setSearchTerm('')
//                 setSelectedCategory('all')
//                 setSelectedLevel('all')
//               }}
//               className="mt-4 text-primary-600 hover:text-primary-700"
//             >
//               Clear filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Clock, Users, Star, ArrowRight, BookOpen, Code, TrendingUp, Shield, Database, Wallet } from 'lucide-react'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { courseAPI } from '../services/api'
import toast from 'react-hot-toast'

export const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const categories = ['all', 'foundation', 'development', 'defi', 'nft', 'trading', 'security']
  const levels = ['all', 'beginner', 'intermediate', 'advanced']

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true)
      try {
        const params = {}
        if (selectedCategory !== 'all') params.category = selectedCategory
        if (selectedLevel !== 'all') params.level = selectedLevel
        if (searchTerm) params.search = searchTerm
        
        const response = await courseAPI.getAll(params)
        setCourses(response.data.data.courses || [])
      } catch (error) {
        console.error('Error fetching courses:', error)
        toast.error('Failed to load courses')
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchCourses()
  }, [selectedCategory, selectedLevel, searchTerm])

  const getLevelColor = (level) => {
    switch(level?.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-700'
      case 'intermediate': return 'bg-yellow-100 text-yellow-700'
      case 'advanced': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'foundation': return <BookOpen className="h-4 w-4" />
      case 'development': return <Code className="h-4 w-4" />
      case 'defi': return <TrendingUp className="h-4 w-4" />
      case 'nft': return <Wallet className="h-4 w-4" />
      case 'trading': return <TrendingUp className="h-4 w-4" />
      case 'security': return <Shield className="h-4 w-4" />
      default: return <Database className="h-4 w-4" />
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading courses...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive blockchain and cryptocurrency courses taught by industry experts
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {levels.map(level => (
                <option key={level} value={level}>
                  {level === 'all' ? 'All Levels' : level.charAt(0).toUpperCase() + level.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">Found {courses.length} courses</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course._id} hover className="overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image || 'https://via.placeholder.com/600x400?text=Course'} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                {course.price === 'Free' && (
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">
                      Free
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex items-center space-x-2 mb-2">
                  {getCategoryIcon(course.category)}
                  <span className="text-xs text-gray-500 capitalize">{course.category}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students?.toLocaleString() || 0}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{course.rating || 0}</span>
                  </div>
                </div>
                
                <Link to={`/courses/${course.slug}`}>
                  <Button variant="outline" fullWidth className="group">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedLevel('all')
              }}
              className="mt-4 text-primary-600 hover:text-primary-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}