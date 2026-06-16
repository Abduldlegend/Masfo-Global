import { Zap, Shield, Award, Users, BookOpen, Code, TrendingUp, Wallet } from 'lucide-react'
import { Card } from '../common/Card'

const features = [
    {
        icon: BookOpen,
        title: 'Comprehensive Curriculum',
        description: 'From beginner to expert - covering DeFi, NFTs, Trading, Smart Contracts, and Web3 development.',
        color: 'text-primary-600',
    },
    {
        icon: Users,
        title: 'Expert Instructors',
        description: 'Learn from industry professionals with real-world crypto and blockchain experience.',
        color: 'text-secondary-500',
    },
    {
        icon: Award,
        title: 'Blockchain Certificates',
        description: 'Earn verifiable NFT certificates on the blockchain for every course you complete.',
        color: 'text-accent-500',
    },
    {
        icon: TrendingUp,
        title: 'Live Trading Sessions',
        description: 'Practice with real market analysis and live trading demonstrations.',
        color: 'text-primary-600',
    },
    {
        icon: Code,
        title: 'Hands-on Projects',
        description: 'Build real DeFi applications, smart contracts, and Web3 dApps.',
        color: 'text-secondary-500',
    },
    {
        icon: Wallet,
        title: 'Job Placement',
        description: 'Connect with top crypto companies and land your dream Web3 job.',
        color: 'text-accent-500',
    },
    {
        icon: Shield,
        title: 'Security First',
        description: 'Learn best practices for wallet security and safe crypto management.',
        color: 'text-primary-600',
    },
    {
        icon: Zap,
        title: '24/7 Community Support',
        description: 'Join our active Discord community with mentors available round the clock.',
        color: 'text-secondary-500',
    },
]

export const Features = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Why Choose{' '}
                        <span className="gradient-text">MASFO GLOBAL</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        We provide world-class crypto education right here in Maiduguri, Nigeria
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} hover className="p-6 text-center group">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-primary-50 rounded-full group-hover:bg-primary-100 transition">
                                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}