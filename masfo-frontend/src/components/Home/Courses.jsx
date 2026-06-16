import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'
import { Card } from '../common/Card'
import { Button } from '../common/Button'

const courses = [
    {
        id: 1,
        title: 'Blockchain Fundamentals',
        description: 'Learn the basics of blockchain technology, consensus mechanisms, and cryptocurrency.',
        image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=300&fit=crop',
        duration: '6 weeks',
        students: 1240,
        rating: 4.8,
        level: 'Beginner',
        category: 'foundation',
    },
    {
        id: 2,
        title: 'Smart Contract Development',
        description: 'Master Solidity, deploy smart contracts, and build on Ethereum and EVM chains.',
        image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&h=300&fit=crop',
        duration: '8 weeks',
        students: 890,
        rating: 4.9,
        level: 'Intermediate',
        category: 'development',
    },
    {
        id: 3,
        title: 'DeFi & Yield Farming',
        description: 'Understand decentralized finance, liquidity pools, yield farming strategies, and risks.',
        image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=400&h=300&fit=crop',
        duration: '6 weeks',
        students: 756,
        rating: 4.7,
        level: 'Intermediate',
        category: 'defi',
    },
    {
        id: 4,
        title: 'NFT Creation & Marketing',
        description: 'Create, mint, and market NFTs. Learn about NFT marketplaces and communities.',
        image: 'https://images.unsplash.com/photo-1644982647811-3f8c5a0a0c2e?w=400&h=300&fit=crop',
        duration: '4 weeks',
        students: 1234,
        rating: 4.6,
        level: 'Beginner',
        category: 'nft',
    },
    {
        id: 5,
        title: 'Crypto Trading Mastery',
        description: 'Technical analysis, risk management, and profitable trading strategies.',
        image: 'https://images.unsplash.com/photo-1642104707032-f3c6c847f0d6?w=400&h=300&fit=crop',
        duration: '8 weeks',
        students: 2100,
        rating: 4.8,
        level: 'Intermediate',
        category: 'trading',
    },
    {
        id: 6,
        title: 'Web3 Development',
        description: 'Build decentralized applications using React, Ethers.js, and Web3 libraries.',
        image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop',
        duration: '10 weeks',
        students: 678,
        rating: 4.9,
        level: 'Advanced',
        category: 'development',
    },
    {
        id: 7,
        title: 'Blockchain Security',
        description: 'Smart contract auditing, security best practices, and vulnerability detection.',
        image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=300&fit=crop',
        duration: '6 weeks',
        students: 432,
        rating: 4.9,
        level: 'Advanced',
        category: 'security',
    },
    {
        id: 8,
        title: 'Crypto Regulations',
        description: 'Understand global crypto regulations, compliance, and legal frameworks.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
        duration: '4 weeks',
        students: 567,
        rating: 4.5,
        level: 'Beginner',
        category: 'foundation',
    },
]

export const Courses = () => {
    const [filter, setFilter] = useState('all')
    const [visibleCourses, setVisibleCourses] = useState(8)

    const filteredCourses = filter === 'all'
        ? courses
        : courses.filter(c => c.category === filter)

    const categories = ['all', 'foundation', 'development', 'defi', 'nft', 'trading', 'security']

    const loadMore = () => {
        setVisibleCourses(prev => prev + 4)
    }

    const getLevelColor = (level) => {
        switch (level.toLowerCase()) {
            case 'beginner': return 'bg-green-100 text-green-700'
            case 'intermediate': return 'bg-yellow-100 text-yellow-700'
            case 'advanced': return 'bg-red-100 text-red-700'
            default: return 'bg-gray-100 text-gray-700'
        }
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Popular <span className="gradient-text">Courses</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Choose from our wide range of crypto and blockchain courses
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full capitalize transition-all duration-200 ${filter === cat
                                    ? 'bg-primary-600 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredCourses.slice(0, visibleCourses).map((course) => (
                        <Card key={course.id} hover className="overflow-hidden group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                                        {course.level}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-2 line-clamp-1">{course.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                                    <div className="flex items-center space-x-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Users className="h-4 w-4" />
                                        <span>{course.students.toLocaleString()} students</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span>{course.rating}</span>
                                    </div>
                                </div>

                                <Link to={`/courses/${course.id}`}>
                                    <Button variant="outline" fullWidth className="group">
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCourses < filteredCourses.length && (
                    <div className="text-center mt-12">
                        <Button onClick={loadMore} variant="outline" size="lg">
                            Load More Courses
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}